require('@nomiclabs/hardhat-waffle');

// TO DO: Copy-paste your Alchemy HTTP Key from Step #1
const ALCHEMY_API_HTTP_KEY = '';

// TO DO: Copy-paste your MetaMask Test Account Rinkeby Private Key **MAKE SURE YOU **
const RINKEBY_PRIVATE_KEY = '';

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: '${ALCHEMY_API_HTTP_KEY}',
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`]
    }
  }
};
