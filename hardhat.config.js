require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
const POLYGON_URL = "https://rpc-mumbai.maticvigil.com";
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths:{
    artifacts:'./src/artifacts'
  },
  networks:{
    hardhat:{
      chainId: 1337,
    },
    polygon: {
      url: POLYGON_URL,
      accounts:[`0x28ce80a4d27a24ce24a23111e8cb089c1439c5e9c7a984bd806c65e40ee5461e`],
      chainId: 80001
    }
  }
};