# ERC721A Goerli to Mumbai Bridge Using fxPortal
This project demonstrates how to use the fxPortal contracts to transfer ERC721A NFTs from Goerli to Mumbai.

## Description

This program is a simple ERC721A contract creating an NFT Collection generated using LeonardoAI and stored at IPFS. The `approveDeposit.js` script uses FxPortal Bridge to transfer the NFTs from Ethereum Goerli to Polygon Mumbai.

### Executing program

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC721A contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance

## Authors

Pranshu Jha  
[@pranshuj73](https://twitter.com/pranshuj73)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details

