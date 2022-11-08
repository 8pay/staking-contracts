const { ethers, getNamedAccounts } = require('hardhat');
const { time } = require('@openzeppelin/test-helpers');

async function main () {
  const { owner, eightPayToken, busdToken } = await getNamedAccounts();

  const START_BLOCK = 22905700;
  const END_BLOCK = 23769700;
  const REWARD_PER_BLOCK = ethers.utils.parseEther('0.00347');
  const LOCK_PERIOD = time.duration.days(60).toString();

  const StakePoolWithLockPeriod = await ethers.getContractFactory('StakePoolWithLockPeriod');

  const stakePool = await StakePoolWithLockPeriod.deploy(
    eightPayToken,
    busdToken,
    START_BLOCK,
    END_BLOCK,
    REWARD_PER_BLOCK,
    LOCK_PERIOD
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
