// ---begin----2022年3月14日-lzg-------
import * as Web3 from 'web3';

import {
  FunctionInputKind,
  FunctionOutputKind,
  Schema,
  StateMutability,
} from '../../../types';

// 更改为polygon
export interface PolygonOwnableContractType {
  name?: string;
  description?: string;
  address: string;
}
// 更改名字
export const polygonOwnableContractSchema: Schema<PolygonOwnableContractType> = {
  version: 1,
  deploymentBlock: 0, // Not indexed (for now; need asset-specific indexing strategy)
  // 更改名字
  name: 'polygonOwnableContract',
  description: 'Smart contract with transferrable ownership.',
  // 图标没改
  thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
  website: 'https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/ownership/Ownable.sol',
  fields: [
    {name: 'Name', type: 'string', description: 'Contract Name'},
    {name: 'Description', type: 'string', description: 'Contract Description'},
    {name: 'Address', type: 'address', description: 'Contract Address'},
  ],
  assetFromFields: (fields: any) => ({
    name: fields.Name,
    address: fields.Address,
    description: fields.Description,
  }),
  formatter:
    async asset => {
      return {
        // 图标没改
        thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
        title: 'Smart Contract: "' + asset.name + '"',
        description: asset.description || ('Ownable smart contract at ' + asset.address),
        // 更改为polygon浏览器

        url: 'https://polygonscan.com/address/' + asset.address,
        // 以下未做更改
        properties: [],
      };
  },
  functions: {
    transfer: asset => ({
      type: Web3.AbiType.Function,
      name: 'transferOwnership',
      payable: false,
      constant: false,
      stateMutability: StateMutability.Nonpayable,
      target: asset.address,
      inputs: [
        {kind: FunctionInputKind.Replaceable, name: 'newOwner', type: 'address'},
      ],
      outputs: [],
    }),
    ownerOf: asset => ({
      type: Web3.AbiType.Function,
      name: 'owner',
      payable: false,
      constant: true,
      stateMutability: StateMutability.View,
      target: asset.address,
      inputs: [],
      outputs: [
        {kind: FunctionOutputKind.Owner, name: 'owner', type: 'address'},
      ],
    }),
    assetsOfOwnerByIndex: [],
  },
  events: {
    transfer: [],
  },
  hash: a => a.address,
};


// ---end----2022年3月14日-lzg-------


// 原始代码

// import * as Web3 from 'web3';

// import {
//   FunctionInputKind,
//   FunctionOutputKind,
//   Schema,
//   StateMutability,
// } from '../../../types';

// export interface OwnableContractType {
//   name?: string;
//   description?: string;
//   address: string;
// }

// export const OwnableContractSchema: Schema<OwnableContractType> = {
//   version: 1,
//   deploymentBlock: 0, // Not indexed (for now; need asset-specific indexing strategy)
//   name: 'OwnableContract',
//   description: 'Smart contract with transferrable ownership.',
//   thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
//   website: 'https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/ownership/Ownable.sol',
//   fields: [
//     {name: 'Name', type: 'string', description: 'Contract Name'},
//     {name: 'Description', type: 'string', description: 'Contract Description'},
//     {name: 'Address', type: 'address', description: 'Contract Address'},
//   ],
//   assetFromFields: (fields: any) => ({
//     name: fields.Name,
//     address: fields.Address,
//     description: fields.Description,
//   }),
//   formatter:
//     async asset => {
//       return {
//         thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
//         title: 'Smart Contract: "' + asset.name + '"',
//         description: asset.description || ('Ownable smart contract at ' + asset.address),
//         url: 'https://etherscan.io/address/' + asset.address,
//         properties: [],
//       };
//   },
//   functions: {
//     transfer: asset => ({
//       type: Web3.AbiType.Function,
//       name: 'transferOwnership',
//       payable: false,
//       constant: false,
//       stateMutability: StateMutability.Nonpayable,
//       target: asset.address,
//       inputs: [
//         {kind: FunctionInputKind.Replaceable, name: 'newOwner', type: 'address'},
//       ],
//       outputs: [],
//     }),
//     ownerOf: asset => ({
//       type: Web3.AbiType.Function,
//       name: 'owner',
//       payable: false,
//       constant: true,
//       stateMutability: StateMutability.View,
//       target: asset.address,
//       inputs: [],
//       outputs: [
//         {kind: FunctionOutputKind.Owner, name: 'owner', type: 'address'},
//       ],
//     }),
//     assetsOfOwnerByIndex: [],
//   },
//   events: {
//     transfer: [],
//   },
//   hash: a => a.address,
// };