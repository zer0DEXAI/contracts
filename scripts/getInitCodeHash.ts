import { type Address, keccak256 } from "viem";
import { bytecode } from "../artifacts/contracts/zer0dexV3Pool.sol/zer0dexV3Pool.json";

async function main() {
	const COMPUTED_INIT_CODE_HASH = keccak256(bytecode as Address);
	console.log("COMPUTED_INIT_CODE_HASH", COMPUTED_INIT_CODE_HASH);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
