import { Contract, ContractInterface, Signer } from 'ethers';
import { Token, VToken } from 'types';
import { areTokensEqual, getContractAddress } from 'utilities';

import { chain, provider } from 'clients/web3';
import bep20Abi from 'constants/contracts/abis/bep20.json';
import comptrollerAbi from 'constants/contracts/abis/comptroller.json';
import governorBravoDelegateAbi from 'constants/contracts/abis/governorBravoDelegate.json';
import maximillionAbi from 'constants/contracts/abis/maximillion.json';
import pancakeRouterAbi from 'constants/contracts/abis/pancakeRouter.json';
import vBep20Abi from 'constants/contracts/abis/vBep20.json';
import vBnbTokenAbi from 'constants/contracts/abis/vBnbToken.json';
import vaiControllerAbi from 'constants/contracts/abis/vaiController.json';
import vaiTokenAbi from 'constants/contracts/abis/vaiToken.json';
import vaiVaultAbi from 'constants/contracts/abis/vaiVault.json';
import venusLensAbi from 'constants/contracts/abis/venusLens.json';
import vrtConverterAbi from 'constants/contracts/abis/vrtConverter.json';
import vrtTokenAbi from 'constants/contracts/abis/vrtToken.json';
import vrtVaultAbi from 'constants/contracts/abis/vrtVault.json';
import xvsTokenAbi from 'constants/contracts/abis/xvsToken.json';
import xvsVaultAbi from 'constants/contracts/abis/xvsVault.json';
import xvsVaultStoreAbi from 'constants/contracts/abis/xvsVaultStore.json';
import xvsVestingAbi from 'constants/contracts/abis/xvsVesting.json';
import { TOKENS } from 'constants/tokens';
import {
  Comptroller,
  GovernorBravoDelegate,
  Maximillion,
  PancakeRouter,
  VaiController,
  VaiVault,
  VenusLens,
  VrtConverter,
  VrtVault,
  XvsVault,
  XvsVaultStore,
  XvsVesting,
} from 'types/contracts';

import { TokenContract, VTokenContract } from './types';

export const getContract = ({
  abi,
  address,
  signer,
}: {
  abi: ContractInterface;
  address: string;
  signer?: Signer;
}) => {
  const signerOrProvider = signer ?? provider({ chainId: chain.id });
  return new Contract(address, abi, signerOrProvider);
};

export const getTokenContract = (token: Token, signer?: Signer) => {
  if (areTokensEqual(token, TOKENS.xvs)) {
    return getContract({
      abi: xvsTokenAbi,
      address: token.address,
      signer,
    }) as TokenContract<'xvs'>;
  }

  if (areTokensEqual(token, TOKENS.vai)) {
    return getContract({
      abi: vaiTokenAbi,
      address: token.address,
      signer,
    }) as TokenContract<'vai'>;
  }

  if (areTokensEqual(token, TOKENS.vrt)) {
    return getContract({
      abi: vrtTokenAbi,
      address: token.address,
      signer,
    }) as TokenContract<'vrt'>;
  }

  return getContract({
    abi: bep20Abi,
    address: token.address,
    signer,
  }) as TokenContract;
};

export const getVTokenContract = (vToken: VToken, signer?: Signer) => {
  if (vToken.symbol === 'vBNB') {
    return getContract({
      abi: vBnbTokenAbi,
      address: vToken.address,
      signer,
    }) as VTokenContract<'bnb'>;
  }

  return getContract({
    abi: vBep20Abi,
    address: vToken.address,
    signer,
  }) as VTokenContract;
};

export const getVaiControllerContract = (signer?: Signer) =>
  getContract({
    abi: vaiControllerAbi,
    address: getContractAddress('vaiController'),
    signer,
  }) as VaiController;

export const getVaiVaultContract = (signer?: Signer) =>
  getContract({
    abi: vaiVaultAbi,
    address: getContractAddress('vaiVault'),
    signer,
  }) as VaiVault;

export const getXvsVaultContract = (signer?: Signer) =>
  getContract({
    abi: xvsVaultAbi,
    address: getContractAddress('xvsVault'),
    signer,
  }) as XvsVault;

export const getXvsVaultProxyContract = (signer?: Signer) =>
  getContract({
    abi: xvsVaultAbi,
    address: getContractAddress('xvsVaultProxy'),
    signer,
  }) as XvsVault;

export const getXvsVaultStoreContract = (signer?: Signer) =>
  getContract({
    abi: xvsVaultStoreAbi,
    address: getContractAddress('xvsVaultStore'),
    signer,
  }) as XvsVaultStore;

export const getComptrollerContract = (signer?: Signer) =>
  getContract({
    abi: comptrollerAbi,
    address: getContractAddress('comptroller'),
    signer,
  }) as Comptroller;

export const getVenusLensContract = (signer?: Signer) =>
  getContract({
    abi: venusLensAbi,
    address: getContractAddress('venusLens'),
    signer,
  }) as VenusLens;

export const getGovernorBravoDelegateContract = (signer?: Signer) =>
  getContract({
    abi: governorBravoDelegateAbi,
    address: getContractAddress('governorBravoDelegator'),
    signer,
  }) as GovernorBravoDelegate;

export const getMaximillionContract = (signer?: Signer) =>
  getContract({
    abi: maximillionAbi,
    address: getContractAddress('maximillion'),
    signer,
  }) as Maximillion;

// VRT conversion
export const getXvsVestingProxyContract = (signer?: Signer) =>
  getContract({
    abi: xvsVestingAbi,
    address: getContractAddress('xvsVestingProxy'),
    signer,
  }) as XvsVesting;

export const getVrtConverterProxyContract = (signer?: Signer) =>
  getContract({
    abi: vrtConverterAbi,
    address: getContractAddress('vrtConverterProxy'),
    signer,
  }) as VrtConverter;

// VRT vault
export const getVrtVaultProxyContract = (signer?: Signer) =>
  getContract({
    abi: vrtVaultAbi,
    address: getContractAddress('vrtVaultProxy'),
    signer,
  }) as VrtVault;

// PancakeSwap router
export const getPancakeRouterContract = (signer?: Signer) =>
  getContract({
    abi: pancakeRouterAbi,
    address: getContractAddress('pancakeRouter'),
    signer,
  }) as PancakeRouter;
