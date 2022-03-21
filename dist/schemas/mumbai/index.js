"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../ContractRole/index");
const ERC1155_1 = require("../ERC1155");
const ERC20_1 = require("../ERC20");
const index_2 = require("../ERC721/index");
// import { rinkebyCryptoKittiesSchema } from './rinkebyCryptoKitties/index';
// import { rinkebyCustomSchema } from './rinkebyCustom/index';
// import { rinkebyENSNameSchema } from './rinkebyENSName/index';
// import { rinkebyENSShortNameAuctionSchema } from './rinkebyENSShortNameAuction/index';
// 同步更改mumbaiOwnableContract
const index_3 = require("./mumbaiOwnableContract/index");
// import { testRinkebyNFTSchema } from './testRinkebyNFT/index';
// 同步更改mumbaiOwnableContractSchema
// 同步更改mumbaiSchemas
exports.mumbaiSchemas = [
    index_3.mumbaiOwnableContractSchema,
    ERC20_1.ERC20Schema,
    index_2.ERC721Schema,
    index_2.ERC721v3Schema,
    ERC1155_1.ERC1155Schema,
    index_1.ContractRoleSchema,
];
//--end-----2022年3月14日, lzg修改后代码,
// 原代码
// import { Schema } from '../../types';
// import { ContractRoleSchema } from '../ContractRole/index';
// import { ERC1155Schema } from '../ERC1155';
// import { ERC20Schema } from '../ERC20';
// import { ERC721Schema, ERC721v3Schema } from '../ERC721/index';
// import { rinkebyCryptoKittiesSchema } from './rinkebyCryptoKitties/index';
// import { rinkebyCustomSchema } from './rinkebyCustom/index';
// import { rinkebyENSNameSchema } from './rinkebyENSName/index';
// import { rinkebyENSShortNameAuctionSchema } from './rinkebyENSShortNameAuction/index';
// import { rinkebyOwnableContractSchema } from './rinkebyOwnableContract/index';
// import { testRinkebyNFTSchema } from './testRinkebyNFT/index';
// export const rinkebySchemas: Array<Schema<any>> = [
//   rinkebyCryptoKittiesSchema,
//   rinkebyCustomSchema,
//   rinkebyENSNameSchema,
//   rinkebyENSShortNameAuctionSchema,
//   rinkebyOwnableContractSchema,
//   testRinkebyNFTSchema,
//   ERC20Schema,
//   ERC721Schema,
//   ERC721v3Schema,
//   ERC1155Schema,
//   ContractRoleSchema,
// ];
//# sourceMappingURL=index.js.map