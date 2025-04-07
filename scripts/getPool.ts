import hre from "hardhat";
import { client } from "./config";

const tokenA = "0x1e0d871472973c562650e991ed8006549f8cbefc"; // BTC
const tokenB = "0x9A87C2412d500343c073E5Ae5394E3bE3874F76b"; // USDT
const feeAmount = 500;

async function main() {
	const factoryContract = await hre.viem.getContractAt(
		"Izer0dexV3Factory",
		"0x25a1d0abb7da28cbf127c96ca895a6b0726dbf3a",
		{ client: { wallet: client } },
	);

	const pool = await factoryContract.read.getPool([tokenA, tokenB, feeAmount]);
	console.log({ pool });

	const nftManager = await hre.viem.getContractAt(
		"zer0dexV3NftManager",
		"0x07b6dda72730d23ef15247c3d34186ae2208e8db",
		{ client: { wallet: client } },
	);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
