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
      default: 0
    },
    eightPayToken: {
      default: 1,
      testnet: '0xbcfee3c6de134d2db1fa7341615cab8ab082196e'
    },
    lpToken: {
      default: 2,
      testnet: '0x6073fd5461e09fc874a0880daf7e174d25228892'
    }
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_KEY
  }
};
