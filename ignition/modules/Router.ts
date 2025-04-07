import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { FACTORY, WETH } from "./address";

const RouterModule = buildModule("RouterModule", (m) => {
	const Router = m.contract("zer0dexV3SwapRouter", [FACTORY, WETH]);
	return { Router };
});

export default RouterModule;
