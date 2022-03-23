
// ---begin----2022年3月14日-lzg-------
// lzg更改后代码，更改代币为mumbai链上的weth地址
import {
  NetworkTokens,
} from '../../types';
// 更改名字为mumbaiTokens
export const mumbaiTokens: NetworkTokens = {
  canonicalWrappedEther: {name: 'mumbai Canonical Wrapped Ether', symbol: 'WETH', decimals: 18, address: '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa'},
  // 置空其他tokens
  otherTokens: [
  ],
};

// ---end----2022年3月14日-lzg-------
// 原代码
// import {
//   NetworkTokens,
// } from '../../types';

// export const rinkebyTokens: NetworkTokens = {
//   canonicalWrappedEther: {name: 'Rinkeby Canonical Wrapped Ether', symbol: 'WETH', decimals: 18, address: '0xc778417e063141139fce010982780140aa0cd5ab'},
//   otherTokens: [
//     {name: 'Rinkeby Test Token', symbol: 'TST', decimals: 18, address: '0xb7dDCF6B64C05D76Adc497AE78AD83ba3883A294'},
//     {name: 'Decentraland - Chainbreakers', symbol: 'MANA', decimals: 18, address: '0x0f8528c53fecb54b7005525a3e797e261a51b88e'},
//   ],
// };
