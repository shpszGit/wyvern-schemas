"use strict";
// ---begin----2022年3月14日-lzg-------
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../ContractRole/index");
const ERC1155_1 = require("../ERC1155");
const ERC20_1 = require("../ERC20");
const index_2 = require("../ERC721/index");
// import { CryptoKittiesSchema } from './CryptoKitties/index';
// import { CryptoPunksSchema } from './CryptoPunks/index';
// import { EnjinItemSchema } from './EnjinItem';
// import { ENSNameSchema } from './ENSName/index';
// import { ENSShortNameAuctionSchema } from './ENSShortNameAuction/index';
// 同步更新polygonOwnableContract
const index_3 = require("./polygonOwnableContract/index");
// 同步更新polygonOwnableContractSchema
// 同步更新polygonMainSchemas
exports.polygonMainSchemas = [
    index_3.polygonOwnableContractSchema,
    ERC20_1.ERC20Schema,
    index_2.ERC721Schema,
    index_2.ERC721v3Schema,
    ERC1155_1.ERC1155Schema,
    index_1.ContractRoleSchema,
];
// ---end----2022年3月14日-lzg-------
// 原代码
// import { Schema } from '../../types';
// import { ContractRoleSchema } from '../ContractRole/index';
// import { ERC1155Schema } from '../ERC1155';
// import { ERC20Schema } from '../ERC20';
// import { ERC721Schema, ERC721v3Schema } from '../ERC721/index';
// import { CryptoKittiesSchema } from './CryptoKitties/index';
// import { CryptoPunksSchema } from './CryptoPunks/index';
// import { EnjinItemSchema } from './EnjinItem';
// import { ENSNameSchema } from './ENSName/index';
// import { ENSShortNameAuctionSchema } from './ENSShortNameAuction/index';
// import { OwnableContractSchema } from './OwnableContract/index';
// export const mainSchemas: Array<Schema<any>> = [
//   CryptoKittiesSchema,
//   CryptoPunksSchema,
//   ENSNameSchema,
//   ENSShortNameAuctionSchema,
//   OwnableContractSchema,
//   ERC20Schema,
//   ERC721Schema,
//   ERC721v3Schema,
//   ERC1155Schema,
//   EnjinItemSchema,
//   ContractRoleSchema,
// ];
//# sourceMappingURL=index.js.map