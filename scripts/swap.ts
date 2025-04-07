import hre from "hardhat";
import { client } from "./config";

const tokenA = "0x1e0d871472973c562650e991ed8006549f8cbefc"; // BTC
const tokenB = "0x9A87C2412d500343c073E5Ae5394E3bE3874F76b"; // USDT

async function main() {
	const router = await hre.viem.getContractAt(
		"zer0dexV3SwapRouter",
		"0xbd52ebe59c0b477a09848d272a9799cf019cfa46",
		{ client: { wallet: client } },
	);

	const ix = await router.write.exactInputSingle([
		{
			tokenIn: tokenA,
			tokenOut: tokenB,
			fee: 3000,
			sqrtPriceLimitX96: BigInt(0),
			amountIn: BigInt(10000000000000),
			amountOutMinimum: BigInt(0),
			recipient: client.account.address,
			deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 20),
		},
	]);

	console.log({ ix });
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
