import {
	loadFixture,
	time,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseGwei } from "viem";

describe("Weth", () => {
	// We define a fixture to reuse the same setup in every test.
	// We use loadFixture to run this setup once, snapshot that state,
	// and reset Hardhat Network to that snapshot in every test.
	async function deployOneYearLockFixture() {
		const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;

		const lockedAmount = parseGwei("1");
		const unlockTime = BigInt((await time.latest()) + ONE_YEAR_IN_SECS);

		// Contracts are deployed using the first signer/account by default
		const [owner, otherAccount] = await hre.viem.getWalletClients();

		const weth = await hre.viem.deployContract("Weth", [], {
			value: lockedAmount,
		});

		const publicClient = await hre.viem.getPublicClient();

		return {
			weth,
			unlockTime,
			lockedAmount,
			owner,
			otherAccount,
			publicClient,
		};
	}

	describe("Deployment", () => {
		it("Should set the right unlockTime", async () => {
			const { weth, unlockTime } = await loadFixture(deployOneYearLockFixture);

			expect(await weth.read.unlockTime()).to.equal(unlockTime);
		});

		it("Should set the right owner", async () => {
			const { weth, owner } = await loadFixture(deployOneYearLockFixture);

			expect(await weth.read.owner()).to.equal(
				getAddress(owner.account.address),
			);
		});

		it("Should receive and store the funds to lock", async () => {
			const { weth, lockedAmount, publicClient } = await loadFixture(
				deployOneYearLockFixture,
			);

			expect(
				await publicClient.getBalance({
					address: weth.address,
				}),
			).to.equal(lockedAmount);
		});

		it("Should fail if the unlockTime is not in the future", async () => {
			// We don't use the fixture here because we want a different deployment
			const latestTime = BigInt(await time.latest());
			await expect(
				hre.viem.deployContract("Lock", [latestTime], {
					value: 1n,
				}),
			).to.be.rejectedWith("Unlock time should be in the future");
		});
	});

	describe("Withdrawals", () => {
		describe("Validations", () => {
			it("Should revert with the right error if called too soon", async () => {
				const { weth } = await loadFixture(deployOneYearLockFixture);

				await expect(weth.write.withdraw()).to.be.rejectedWith(
					"You can't withdraw yet",
				);
			});

			it("Should revert with the right error if called from another account", async () => {
				const { weth, unlockTime, otherAccount } = await loadFixture(
					deployOneYearLockFixture,
				);

				// We can increase the time in Hardhat Network
				await time.increaseTo(unlockTime);

				// We retrieve the contract with a different account to send a transaction
				const wethAsOtherAccount = await hre.viem.getContractAt(
					"Weth",
					weth.address,
					{ client: { wallet: otherAccount } },
				);
				await expect(wethAsOtherAccount.write.withdraw()).to.be.rejectedWith(
					"You aren't the owner",
				);
			});

			it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async () => {
				const { weth, unlockTime } = await loadFixture(
					deployOneYearLockFixture,
				);

				// Transactions are sent using the first signer by default
				await time.increaseTo(unlockTime);

				await expect(weth.write.withdraw()).to.be.fulfilled;
			});
		});

		describe("Events", () => {
			it("Should emit an event on withdrawals", async () => {
				const { weth, unlockTime, lockedAmount, publicClient } =
					await loadFixture(deployOneYearLockFixture);

				await time.increaseTo(unlockTime);

				const hash = await weth.write.withdraw();
				await publicClient.waitForTransactionReceipt({ hash });

				// get the withdrawal events in the latest block
				const withdrawalEvents = await weth.getEvents.Withdrawal();
				expect(withdrawalEvents).to.have.lengthOf(1);
				// expect(withdrawalEvents[0].args.amount).to.equal(lockedAmount);
			});
		});
	});
});
