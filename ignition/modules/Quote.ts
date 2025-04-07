import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { FACTORY, WETH } from "./address";

const QuoteModule = buildModule("QuoteModule", (m) => {
	const Quote = m.contract("zer0dexV3Quoter", [FACTORY, WETH]);
	return { Quote };
});

export default QuoteModule;
