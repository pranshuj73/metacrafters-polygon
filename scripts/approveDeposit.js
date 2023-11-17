// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/PolyNFT.sol/PolyNFT.json");

const tokenAddress = "0x636C69751459493032b85400f19A7FaC905c86b5"; // place your ERC721A contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC721ARootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x6E77CD89b6D5b3E2DcaB1E039F24F0582e531441"; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721ARootAddress);

    for (let i = 0; i < 5; i++) {
      const approveTx = await tokenContract.approve(fxERC721ARootAddress, i);
      await approveTx.wait();

      console.log('Approval confirmed');


      const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
      await depositTx.wait();

      console.log("Tokens deposited");
    }
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });