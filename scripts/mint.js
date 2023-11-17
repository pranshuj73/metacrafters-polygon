// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/PolyNFT.sol/PolyNFT.json");
require('dotenv').config()

const tokenAddress = "0x636C69751459493032b85400f19A7FaC905c86b5"; // place your ERC721A contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x6E77CD89b6D5b3E2DcaB1E039F24F0582e531441"; // place your public address for your wallet here

const nftURIs = [
  "QmYpXyo4rR1fWSQBMmFNWqXHoxZvBMgkJShg6ofNGMJBD3",
  "QmcmuhEThbpu7BoWqPWZqEa9f8autCs9YLP2npMuwxwVjU",
  "QmaR31DDUanpvDw8x5mW2ntpdtAS1FVtpwbnngAp9cxnyN",
  "QmbMK7sjN7ikdDjWSDvKxzkHPjWkbK11Hod1MUhxDH4Kqs",
  "QmVjbBgQDr15cpx1AWi3z8rVB2aPrxsP3gKiJFDJMbsXqc"
]

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  
    console.log("Transaction beginning...")

    const tx = await token.mint(walletAddress, 5);
    await tx.wait();
    
    for (let i = 0; i < 5; i++) {
      let promptTx = await token.setPromptDescription(i, `This is an NFT created with LeonardoAI. It's name is Poly-${i}`);
      await promptTx.wait();
      
      let URItx = await token.setTokenURI(i, nftURIs[i]);
      await URItx.wait();

      console.log(`Token ${i} minted`)
    }
   
    console.log("Transaction complete!")
    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });