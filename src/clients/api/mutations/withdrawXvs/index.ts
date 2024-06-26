import { ContractTransaction } from 'ethers';

import { XvsVesting } from 'packages/contracts';

export interface WithdrawXvsInput {
  xvsVestingContract: XvsVesting;
}

export type WithdrawXvsOutput = ContractTransaction;

const withdrawXvs = async ({ xvsVestingContract }: WithdrawXvsInput): Promise<WithdrawXvsOutput> =>
  xvsVestingContract.withdraw();

export default withdrawXvs;
