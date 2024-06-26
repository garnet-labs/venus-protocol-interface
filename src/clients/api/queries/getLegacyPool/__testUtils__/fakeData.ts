import { BigNumber as BN } from 'ethers';

export const fakeGetXvsPriceOutput = BN.from('0x30f7dc8a6370b000');

export const fakeGetAssetsInOutput = [
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E',
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0',
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe',
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4',
  '0x74469281310195A04840Daf6EdF576F559a3dE80',
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c',
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04',
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7',
];

export const fakeGetVaiRepayAmountOutput = BN.from('0x00');

export const fakeGetUnderlyingPriceOutputs = {
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7': BN.from('0x0c9f252afd4c2fb98f97000000'),
  '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A': BN.from('0x0c9f00c3826ac3b6fd38c00000'),
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4': BN.from('0x0ddfc1bd0c5de800'),
  '0x74469281310195A04840Daf6EdF576F559a3dE80': BN.from('0x037474d7e3bfac00'),
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c': BN.from('0x0ba44b0d5ad2004800'),
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E': BN.from('0x30f7dc8a6370b000'),
  '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab': BN.from('0x58e0a2138e84ee0000'),
  '0xAfc13BC065ABeE838540823431055D2ea52eBA52': BN.from('0x037942fd7102be5c00'),
  '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C': BN.from('0x0702b820fa7ee000'),
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe': BN.from('0x057eeeebda8e17a00800'),
  '0x37C28DE42bA3d22217995D146FC684B2326Ede64': BN.from('0x038f17ea90a62000'),
  '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9': BN.from('0x020a0ca01fb38684f0500000'),
  '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6': BN.from('0x111d7aa92d73a800'),
  '0x3619bdDc61189F33365CC572DF3a68FB3b316516': BN.from('0x078d630446c48000'),
  '0x714db6c38A17883964B68a07d56cE331501d9eb6': BN.from('0x02ffb81ee6ee9c0000'),
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0': BN.from('0x0de0b6b3a7640000'),
  '0x369Fea97f6fB7510755DCA389088d9E2e2819278': BN.from('0x0111d2d971bda800'),
  '0xF206af85BC2761c4F876d27Bd474681CfB335EfA': BN.from('0x01'),
  '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a': BN.from('0xe8d4a51000'),
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04': BN.from('0xf90a88392965357922800000'),
  '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b': BN.from('0x5a069df15cba8eec00'),
  '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23': BN.from('0x0de0b6b3a7640000'),
};

export const fakeBorrowCapsOutputs = {
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7': BN.from('0x00'),
  '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A': BN.from('0x00'),
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4': BN.from('0x01'),
  '0x74469281310195A04840Daf6EdF576F559a3dE80': BN.from('0x00'),
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c': BN.from('0x00'),
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E': BN.from('0x392cbab546b0ccc00000'),
  '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab': BN.from('0x00'),
  '0xAfc13BC065ABeE838540823431055D2ea52eBA52': BN.from('0x00'),
  '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C': BN.from('0x00'),
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe': BN.from('0x00'),
  '0x37C28DE42bA3d22217995D146FC684B2326Ede64': BN.from('0x00'),
  '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9': BN.from('0x00'),
  '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6': BN.from('0x0a968163f0a57b400000'),
  '0x3619bdDc61189F33365CC572DF3a68FB3b316516': BN.from('0x00'),
  '0x714db6c38A17883964B68a07d56cE331501d9eb6': BN.from('0x00'),
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0': BN.from('0x00'),
  '0x369Fea97f6fB7510755DCA389088d9E2e2819278': BN.from('0x00'),
  '0xF206af85BC2761c4F876d27Bd474681CfB335EfA': BN.from('0x00'),
  '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a': BN.from('0x00'),
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04': BN.from('0x00'),
  '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b': BN.from('0x0ad78ebc5ac6200000'),
  '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23': BN.from('0x7f0e10af47c1c7000000'),
};

export const fakeSupplyCapsOutputs = {
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4': BN.from('0x00'),
  '0x74469281310195A04840Daf6EdF576F559a3dE80': BN.from('0x31a6207cd74525f3dc71c0000000'),
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0xAfc13BC065ABeE838540823431055D2ea52eBA52': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x37C28DE42bA3d22217995D146FC684B2326Ede64': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x3619bdDc61189F33365CC572DF3a68FB3b316516': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x714db6c38A17883964B68a07d56cE331501d9eb6': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x369Fea97f6fB7510755DCA389088d9E2e2819278': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0xF206af85BC2761c4F876d27Bd474681CfB335EfA': BN.from('0x00'),
  '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a': BN.from('0x00'),
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04': BN.from(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  ),
  '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b': BN.from('0x1043561a8829300000'),
  '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23': BN.from('0xd3c21bcecceda1000000'),
};

export const fakeXvsBorrowSpeedOutputs = {
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7': BN.from('0x3dadd6a60fa600'),
  '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A': BN.from('0x3dadd6a60fa600'),
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4': BN.from('0x00'),
  '0x74469281310195A04840Daf6EdF576F559a3dE80': BN.from('0x03157def08c0e3'),
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c': BN.from('0xb90983f22ef200'),
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E': BN.from('0x00'),
  '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab': BN.from('0x1ed6eb70d53800'),
  '0xAfc13BC065ABeE838540823431055D2ea52eBA52': BN.from('0x1ed6eb70d53800'),
  '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C': BN.from('0x1ed6eb70d53800'),
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe': BN.from('0xb90983f22ef200'),
  '0x37C28DE42bA3d22217995D146FC684B2326Ede64': BN.from('0x0acb38c49ea318'),
  '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9': BN.from('0x05a681d211373a'),
  '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6': BN.from('0x0acb38c49ea318'),
  '0x3619bdDc61189F33365CC572DF3a68FB3b316516': BN.from('0x00'),
  '0x714db6c38A17883964B68a07d56cE331501d9eb6': BN.from('0x018abef7846072'),
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0': BN.from('0x00'),
  '0x369Fea97f6fB7510755DCA389088d9E2e2819278': BN.from('0x03157def08c0e4'),
  '0xF206af85BC2761c4F876d27Bd474681CfB335EfA': BN.from('0x03157def08c0e4'),
  '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a': BN.from('0x04a03ce68d2156'),
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04': BN.from('0x03157def08c0e3'),
  '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b': BN.from('0x021e75bc475f0c'),
  '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23': BN.from('0xc55f7bc23039'),
};

export const fakeXvsSupplySpeedOutputs = {
  '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7': BN.from('0x3dadd6a60fa600'),
  '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A': BN.from('0x3dadd6a60fa600'),
  '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4': BN.from('0x00'),
  '0x74469281310195A04840Daf6EdF576F559a3dE80': BN.from('0x03157def08c0e3'),
  '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c': BN.from('0xb90983f22ef200'),
  '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E': BN.from('0x00'),
  '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab': BN.from('0x1ed6eb70d53800'),
  '0xAfc13BC065ABeE838540823431055D2ea52eBA52': BN.from('0x1ed6eb70d53800'),
  '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C': BN.from('0x1ed6eb70d53800'),
  '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe': BN.from('0xb90983f22ef200'),
  '0x37C28DE42bA3d22217995D146FC684B2326Ede64': BN.from('0x0acb38c49ea318'),
  '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9': BN.from('0x05a681d211373a'),
  '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6': BN.from('0x0acb38c49ea318'),
  '0x3619bdDc61189F33365CC572DF3a68FB3b316516': BN.from('0x00'),
  '0x714db6c38A17883964B68a07d56cE331501d9eb6': BN.from('0x018abef7846072'),
  '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0': BN.from('0x00'),
  '0x369Fea97f6fB7510755DCA389088d9E2e2819278': BN.from('0x03157def08c0e4'),
  '0xF206af85BC2761c4F876d27Bd474681CfB335EfA': BN.from('0x03157def08c0e4'),
  '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a': BN.from('0x04a03ce68d2156'),
  '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04': BN.from('0x03157def08c0e3'),
  '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b': BN.from('0x021e75bc475f0c'),
  '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23': BN.from('0xc55f7bc23039'),
};

export const fakeVTokenBalancesAllOutput = [
  {
    vToken: '0xD5C4C2e2facBEB59D0216D0595d63FcDc6F9A1a7',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x9c8c53'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x1365b040b675'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffe033fe072f'),
  },
  {
    vToken: '0xb7526572FFE56AB9D7489838Bf2E18e3323b441A',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x1a78c999e6ab'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x204fb9313b5d351530080df8'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffce4a2b7f9'),
  },
  {
    vToken: '0x08e0A5575De71037aE36AbfAfb516595fE68e5e4',
    balanceOf: BN.from('0x06d3faf8f065d0dd'),
    borrowBalanceCurrent: BN.from('0x0b13dcc0553d80e6fecb33'),
    balanceOfUnderlying: BN.from('0x52baee784430933a367879'),
    tokenBalance: BN.from('0x2009084ac91b161262655797'),
    tokenAllowance: BN.from('0x20090a68e2fbdfcd14a55797'),
  },
  {
    vToken: '0x74469281310195A04840Daf6EdF576F559a3dE80',
    balanceOf: BN.from('0x0208887d15faa8'),
    borrowBalanceCurrent: BN.from('0x074daffe6d79bdd536'),
    balanceOfUnderlying: BN.from('0x1b7af46077c560c79148'),
    tokenBalance: BN.from('0x21412a87a401b9f52b160000'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffffe51847cad389f0bfffff'),
  },
  {
    vToken: '0x2E7222e51c0f6e98610A1543Aa3836E092CDe62c',
    balanceOf: BN.from('0x0175e1ef02453e'),
    borrowBalanceCurrent: BN.from('0x0edca19edfa534de621b'),
    balanceOfUnderlying: BN.from('0x468a727f89a362ed9fdb'),
    tokenBalance: BN.from('0x8502d85123a800'),
    tokenAllowance: BN.from('0x8502d85123a800'),
  },
  {
    vToken: '0x6d6F697e34145Bb95c54E77482d97cc261Dc237E',
    balanceOf: BN.from('0x115a3cc5cb72c6'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0xd6f3109e087d6631fe88'),
    tokenBalance: BN.from('0x04a12be2351d65639ba911'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffff'),
  },
  {
    vToken: '0x162D005F0Fff510E54958Cfc5CF32A3180A84aab',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x016225b3e2b944410b'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x12362de47784a9c3fad2'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffffffe92d738a8db88bffff'),
  },
  {
    vToken: '0xAfc13BC065ABeE838540823431055D2ea52eBA52',
    balanceOf: BN.from('0x01b2d36ea88e5a'),
    borrowBalanceCurrent: BN.from('0x1d47e7c1c3e92ef846'),
    balanceOfUnderlying: BN.from('0x16ee00ec27a4d7bb3c05'),
    tokenBalance: BN.from('0x01ec2c6f7d657b7c0000'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffffe9a35bbace13b69bffff'),
  },
  {
    vToken: '0x488aB2826a154da01CC4CC16A8C83d4720D3cA2C',
    balanceOf: BN.from('0x0107403d01589d74'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x0e6db7ca6dcbcfc66b85c8'),
    tokenBalance: BN.from('0x1622290c5ab44cf8a2a81c'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffcf44aba726fcfcc7fe2422'),
  },
  {
    vToken: '0xb6e9322C49FD75a367Fcb17B0Fcd62C5070EbCBe',
    balanceOf: BN.from('0x0af7c2457a'),
    borrowBalanceCurrent: BN.from('0x03281b30a1c48fcf08'),
    balanceOfUnderlying: BN.from('0x9e339617b3d2a0a3'),
    tokenBalance: BN.from('0x152d91cf8f2411e75394'),
    tokenAllowance: BN.from('0x32f422ece5359a9190'),
  },
  {
    vToken: '0x37C28DE42bA3d22217995D146FC684B2326Ede64',
    balanceOf: BN.from('0xb175a2881b3823'),
    borrowBalanceCurrent: BN.from('0x6d2d5e6e0d3c1b6f408f'),
    balanceOfUnderlying: BN.from('0x08b765441d7f55398fdbb9'),
    tokenBalance: BN.from('0x7e37b63bd5a17885f75356ccaf'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffff6af54bcbbd193bd7eccae'),
  },
  {
    vToken: '0xF912d3001CAf6DC4ADD366A62Cc9115B4303c9A9',
    balanceOf: BN.from('0xb1a6f24e960cb1'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x03ee1d736bbc63'),
    tokenBalance: BN.from('0x0b7abc62705050aaad72e1f7547bc4fd5617'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffffffffffc018ef9332b14'),
  },
  {
    vToken: '0xeDaC03D29ff74b5fDc0CC936F6288312e1459BC6',
    balanceOf: BN.from('0x1e4890d1667e12'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x01a354497f6ee36e5db445'),
    tokenBalance: BN.from('0x20a0cf2d039b35c0a0c97c9e'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffb3681f06dacd741d17c9d'),
  },
  {
    vToken: '0x3619bdDc61189F33365CC572DF3a68FB3b316516',
    balanceOf: BN.from('0x11c77582facc34'),
    borrowBalanceCurrent: BN.from('0x25e233441ec90ece2b5c'),
    balanceOfUnderlying: BN.from('0x03e707348a326b46bd24d6'),
    tokenBalance: BN.from('0x02f050fe93a992c1363f963c2831418000'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffff2c011f312a62621bffff'),
  },
  {
    vToken: '0x714db6c38A17883964B68a07d56cE331501d9eb6',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x7ca56f6a76'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x00'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffffffa9438a1d29cefffff'),
  },
  {
    vToken: '0x3A00d9B02781f47d033BAd62edc55fBF8D083Fb0',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x22f04dd08dde193719669da5'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffffe7e8f720f631e70c848'),
  },
  {
    vToken: '0x369Fea97f6fB7510755DCA389088d9E2e2819278',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x152d2c6a084fb6fc9862'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffffffff21f494c589bffff'),
  },
  {
    vToken: '0xF206af85BC2761c4F876d27Bd474681CfB335EfA',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x00'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
  },
  {
    vToken: '0x9C3015191d39cF1930F92EB7e7BCbd020bCA286a',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x00'),
    tokenAllowance: BN.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
  },
  {
    vToken: '0x6AF3Fdb3282c5bb6926269Db10837fa8Aec67C04',
    balanceOf: BN.from('0x5af4ea1f8aee'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x0182c0e5ae58'),
    tokenBalance: BN.from('0x0de0b59a796c93c0'),
    tokenAllowance: BN.from('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0a1eff'),
  },
  {
    vToken: '0x35566ED3AF9E537Be487C98b1811cDf95ad0C32b',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x00'),
    tokenAllowance: BN.from('0x00'),
  },
  {
    vToken: '0xEFAACF73CE2D38ED40991f29E72B12C74bd4cf23',
    balanceOf: BN.from('0x00'),
    borrowBalanceCurrent: BN.from('0x00'),
    balanceOfUnderlying: BN.from('0x00'),
    tokenBalance: BN.from('0x00'),
    tokenAllowance: BN.from('0x00'),
  },
];
