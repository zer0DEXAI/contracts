import { http, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { zeroG } from "viem/chains";

const account = privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);

export const client = createWalletClient({
	account,
	chain: zeroG,
	transport: http(),
});
