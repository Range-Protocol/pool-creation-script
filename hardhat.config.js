require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: "https://rpc.mantle.xyz"
        // url: "https://singapore.rpc.blxrbdn.com"
      }
    }
  },
  solidity: "0.8.19",
};
