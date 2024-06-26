import { QueryObserverOptions, useQuery } from 'react-query';

import getVTokens, { GetVTokensOutput } from 'clients/api/queries/getVTokens';
import FunctionKey from 'constants/functionKey';
import {
  useGetLegacyPoolComptrollerContract,
  useGetPoolLensContract,
  useGetPoolRegistryContractAddress,
  useGetVenusLensContract,
} from 'packages/contracts';
import { useGetTokens } from 'packages/tokens';
import { useChainId } from 'packages/wallet';
import { ChainId } from 'types';
import { callOrThrow } from 'utilities';

export type UseGetVTokensQueryKey = [
  FunctionKey.GET_VTOKENS,
  {
    chainId: ChainId;
  },
];

type Options = QueryObserverOptions<
  GetVTokensOutput,
  Error,
  GetVTokensOutput,
  GetVTokensOutput,
  UseGetVTokensQueryKey
>;

const useGetVTokens = (options?: Options) => {
  const { chainId } = useChainId();
  const tokens = useGetTokens();

  const venusLensContract = useGetVenusLensContract();
  const legacyPoolComptrollerContract = useGetLegacyPoolComptrollerContract();
  const poolLensContract = useGetPoolLensContract();
  const poolRegistryContractAddress = useGetPoolRegistryContractAddress();

  return useQuery(
    [
      FunctionKey.GET_VTOKENS,
      {
        chainId,
      },
    ],
    () =>
      callOrThrow({ poolLensContract, poolRegistryContractAddress }, params =>
        getVTokens({
          legacyPoolComptrollerContract,
          venusLensContract,
          tokens,
          ...params,
        }),
      ),
    options,
  );
};

export default useGetVTokens;
