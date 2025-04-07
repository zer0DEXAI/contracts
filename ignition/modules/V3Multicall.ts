import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MulticallModule = buildModule("MulticallModule", (m) => {
	const Multicall = m.contract("zer0dexV3Multicall");
	return { Multicall };
});

export default MulticallModule;
