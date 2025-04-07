# @zer0dex/contracts

## Overview

Zer0dex is a fork of Uniswap V3, focused on improving and extending the features of the Uniswap protocol. This project includes all the smart contracts necessary for a decentralized exchange with concentrated liquidity provision features.

## Key Features

- **Concentrated Liquidity**: Allows liquidity providers to specify price ranges for their liquidity
- **Multiple Fee Tiers**: Supports various fee levels for different trading pairs
- **NFT Position Management**: Manages liquidity positions through NFTs
- **Smart Routing**: Optimizes trading paths for the best slippage

## Project Structure

```text
contracts/
├── base/             # Base classes for contracts
├── interfaces/       # Contract interfaces
├── libraries/        # Utility libraries
├── zer0dexV3Factory.sol        # Contract for creating and managing pools
├── zer0dexV3Pool.sol           # Main pool contract handling trades and liquidity
├── zer0dexV3SwapRouter.sol     # Router for executing trades
├── zer0dexV3NftManager.sol     # Manages liquidity positions as NFTs
├── zer0dexV3Quoter.sol         # Calculates quotes for trades
├── zer0dexV3PoolDeployer.sol   # Deploys new pools
└── zer0dexV3Multicall.sol      # Executes multiple calls in one transaction
```

## Installation

```bash
# Install dependencies
npm install

# Compile contracts
npx hardhat compile
```

## Testing

```bash
npx hardhat test
```

## Deployment

```bash
npx hardhat run scripts/deploy.ts --network <network>
```

## Development and Contribution

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the GPL-2.0 License - see the [LICENSE](LICENSE) file for details.

## References

- [Uniswap V3 Whitepaper](https://uniswap.org/whitepaper-v3.pdf)
- [Uniswap V3 Documentation](https://docs.uniswap.org/protocol/introduction)

## Contact

If you have questions or suggestions, please open an issue in this repository.
