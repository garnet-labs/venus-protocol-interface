import { queryClient } from 'clients/api';
import FunctionKey from 'constants/functionKey';
import indexedVotingSupportNames from 'constants/indexedVotingSupportNames';
import { UseSendTransactionOptions, useSendTransaction } from 'hooks/useSendTransaction';
import { useAnalytics } from 'packages/analytics';
import { useGetGovernorBravoDelegateContract } from 'packages/contracts';
import { callOrThrow } from 'utilities';

import castVoteWithReason, { CastVoteWithReasonInput } from './castVoteWithReason';

type TrimmedCastVoteWithReasonInput = Omit<
  CastVoteWithReasonInput,
  'governorBravoDelegateContract'
>;
type Options = UseSendTransactionOptions<TrimmedCastVoteWithReasonInput>;

const useCastVoteWithReason = (options?: Options) => {
  const governorBravoDelegateContract = useGetGovernorBravoDelegateContract({
    passSigner: true,
  });
  const { captureAnalyticEvent } = useAnalytics();

  return useSendTransaction({
    fnKey: FunctionKey.CAST_VOTE,
    fn: (input: TrimmedCastVoteWithReasonInput) =>
      callOrThrow({ governorBravoDelegateContract }, params =>
        castVoteWithReason({
          ...input,
          ...params,
        }),
      ),
    onConfirmed: async ({ input }) => {
      const { proposalId, voteType } = input;

      captureAnalyticEvent('Vote cast', {
        proposalId,
        voteType: indexedVotingSupportNames[voteType],
      });

      // Invalidate query to fetch voters
      queryClient.invalidateQueries([
        FunctionKey.GET_VOTERS,
        {
          id: proposalId,
          filter: voteType,
        },
      ]);

      // Invalidate query to fetch proposal list
      queryClient.invalidateQueries(FunctionKey.GET_PROPOSALS);
    },
    options,
  });
};

export default useCastVoteWithReason;
