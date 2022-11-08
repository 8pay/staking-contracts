require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-truffle5');
require('@nomiclabs/hardhat-web3');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-deploy');
require('hardhat-contract-sizer');
require('hardhat-abi-exporter');
require('solidity-coverage');
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    mainnet: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts: { mnemonic: process.env.MNEMONIC }
    },
    testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: { mnemonic: process.env.MNEMONIC }
    }
  },
  namedAccounts: {
    owner: {
      default: 0,
      mainnet: '0xD8BEC82Dd5C0FE69f012de6660C4a44d63b786BD',
      testnet: '0xD8BEC82Dd5C0FE69f012de6660C4a44d63b786BD'
    },
    eightPayToken: {
      default: 1,
      mainnet: '0xFeea0bDd3D07eb6FE305938878C0caDBFa169042',
      testnet: '0xbcfee3c6de134d2db1fa7341615cab8ab082196e'
    },
    lpToken: {
      default: 2,
      mainnet: '0x2992bed56A519670eFa04f904801e20C322670Db',
      testnet: '0x6073fd5461e09fc874a0880daf7e174d25228892'
    },
    busdToken: {
      default: 3,
      mainnet: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      testnet: ''
    }
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_KEY
  }
};
