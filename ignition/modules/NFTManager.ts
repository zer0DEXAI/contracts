import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { FACTORY, WETH } from "./address";

const NFTModule = buildModule("NftManagerModule", (m) => {
	const tokenURI = "https://zeroswap-xi.vercel.app/nft.json";
	const NFT = m.contract("zer0dexV3NftManager", [FACTORY, WETH, tokenURI]);
	return { NFT };
});

export default NFTModule;
