const { ethers, getNamedAccounts } = require('hardhat');

async function main () {
  const { owner, eightPayToken } = await getNamedAccounts();

  const START_BLOCK = 120;
  const END_BLOCK = 220;
  const REWARD_PER_BLOCK = 2000;

  const StakePool = await ethers.getContractFactory('StakePool');

  const stakePool = await StakePool.deploy(
    eightPayToken,
    eightPayToken,
    START_BLOCK,
    END_BLOCK,
    REWARD_PER_BLOCK
  );

  await stakePool.transferOwnership(owner);

  console.log(`StakePool: ${stakePool.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
