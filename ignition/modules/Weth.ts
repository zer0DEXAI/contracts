import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WethModule = buildModule("WethModule", (m) => {
	const WETH = m.contract("WETH");
	return { WETH };
});

export default WethModule;
