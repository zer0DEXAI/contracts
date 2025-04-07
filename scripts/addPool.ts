// import { client } from "./config";
// import hre from "hardhat";
// import { encodeSqrtRatioX96 } from "@uniswap/v3-sdk";
// import { Fraction } from "@uniswap/sdk-core";

const tokenA = "0x1e0d871472973c562650e991ed8006549f8cbefc"; // BTC
const tokenB = "0x9A87C2412d500343c073E5Ae5394E3bE3874F76b"; // USDT
const feeAmount = 3000;

async function main() {
	// const factoryContract = await hre.viem.getContractAt(
	// 	"Izer0dexV3Factory",
	// 	"0x25a1d0abb7da28cbf127c96ca895a6b0726dbf3a",
	// 	{ client: { wallet: client } },
	// );
	// const tx = await factoryContract.write.createPool([
	// 	tokenA,
	// 	tokenB,
	// 	feeAmount,
	// ]);
	// console.log({ tx });
	// const nftManager = await hre.viem.getContractAt(
	// 	"zer0dexV3NftManager",
	// 	"0x07b6dda72730d23ef15247c3d34186ae2208e8db",
	// 	{ client: { wallet: client } },
	// );
	// Initial price ratio for BTC/USDT (e.g., 1 BTC = 65000 USDT)
	// Using encodeSqrtRatioX96 from Uniswap SDK to calculate sqrtPriceX96
	// const price = new Fraction(65000, 1); // Set the initial price ratio
	// const sqrtPriceX96 = encodeSqrtRatioX96(price.numerator, price.denominator);
	// const tx = await nftManager.write.createAndInitializePoolIfNecessary([
	// 	tokenA,
	// 	tokenB,
	// 	feeAmount,
	// 	BigInt(sqrtPriceX96.toString()),
	// ]);
	// console.log({ tx });
	// const nftManager = await hre.viem.getContractAt(
	// 	"zer0dexV3NftManager",
	// 	"0x07b6dda72730d23ef15247c3d34186ae2208e8db",
	// 	{ client: { wallet: client } },
	// );
	// const raw = {
	// 	amount0Desired: 999999993692022,
	// 	amount0Min: 0,
	// 	amount1Desired: 64993890,
	// 	amount1Min: 0,
	// 	deadline: 1741281259,
	// 	fee: 3000,
	// 	gas: 84799,
	// 	recipient: "0x07B6dDa72730d23ef15247c3d34186aE2208E8dB",
	// 	tickLower: -887220,
	// 	tickUpper: 887220,
	// 	token0: "0x1E0D871472973c562650E991ED8006549F8CBEfc",
	// 	token1: "0x9A87C2412d500343c073E5Ae5394E3bE3874F76b",
	// };
	// const tx = await nftManager.write.mint([raw]);
	// console.log(tx);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
