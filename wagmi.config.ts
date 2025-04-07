import { defineConfig, loadEnv } from "@wagmi/cli";
import { hardhat } from "@wagmi/cli/plugins";

// import { react } from "@wagmi/cli/plugins";

export default defineConfig(() => {
	loadEnv({
		mode: process.env.NODE_ENV,
		envDir: process.cwd(),
	});
	return {
		out: "../packages/sdk/src/abi.ts",
		plugins: [
			hardhat({
				project: "./contracts",
				artifacts: "../artifacts/contracts",
			}),
			// react({
			// 	useContractRead: true,
			// 	useContractFunctionRead: true,
			// 	useContractFunctionWrite: true,
			// 	useContractWrite: true,
			// }),
		],
	};
});
