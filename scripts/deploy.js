const { ethers } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners(); //A Signer in Ethers.js is an object that represents an Ethereum account. It's used to send transactions to contracts and other accounts.

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // deploy contracts here:
  const AccessControl=await ethers.getContractFactory("AccessControl");
  const accesscontrol=await AccessControl.deploy();

  console.log("AccessControl contract address: ",accesscontrol.address)
  
  // For each contract, pass the deployed contract and name to this function to save a copy of the contract ABI and address to the front end.
  //saveFrontendFiles(accesscontrol,"AccessControl");
}



main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });