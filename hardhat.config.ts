import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import * as dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/.env` });

const config: HardhatUserConfig = {
	networks: {
		hardhat: {
			allowUnlimitedContractSize: true,
		},

		zer0g: {
			url: "https://evmrpc-testnet.0g.ai",
			accounts: [`${process.env.PRIVATE_KEY}`],
			timeout: 2000000,
			gasPrice: 1_000_000,
		},
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY,
	},
	solidity: {
		compilers: [
			{
				version: "0.7.6",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100,
					},
					metadata: {
						bytecodeHash: "none",
					},
				},
			},
		],
		overrides: {
			"contracts/Multicall.sol": {
				version: "0.8.12",
			},
		},
	},
};

export default config;
