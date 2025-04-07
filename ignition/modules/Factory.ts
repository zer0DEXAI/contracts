import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const FactoryModule = buildModule("FactoryModule", (m) => {
	const Factory = m.contract("zer0dexV3Factory");
	return { Factory };
});

export default FactoryModule;
