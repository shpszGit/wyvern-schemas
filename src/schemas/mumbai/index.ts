
// --begin-----2022年3月14日, lzg修改后代码,
// --乔帮主----------
// 与乔帮主微信沟通，乔帮主：“把 index.ts 中除了 ERC721、ERC20、ERC1155 和 OwnableContractSchema 之外的 schema 注释掉”
// 和乔帮主确认，下面两个不注释。Schema 和 ContractRoleSchema
import { Schema } from '../../types';
import { ContractRoleSchema } from '../ContractRole/index';
import { ERC1155Schema } from '../ERC1155';
import { ERC20Schema } from '../ERC20';
import { ERC721Schema, ERC721v3Schema } from '../ERC721/index';

// import { rinkebyCryptoKittiesSchema } from './rinkebyCryptoKitties/index';
// import { rinkebyCustomSchema } from './rinkebyCustom/index';
// import { rinkebyENSNameSchema } from './rinkebyENSName/index';
// import { rinkebyENSShortNameAuctionSchema } from './rinkebyENSShortNameAuction/index';
// 同步更改mumbaiOwnableContract
import { mumbaiOwnableContractSchema } from './mumbaiOwnableContract/index';
// import { testRinkebyNFTSchema } from './testRinkebyNFT/index';

// 同步更改mumbaiOwnableContractSchema
// 同步更改mumbaiSchemas
export const mumbaiSchemas: Array<Schema<any>> = [
  mumbaiOwnableContractSchema,
  ERC20Schema,
  ERC721Schema,
  ERC721v3Schema,
  ERC1155Schema,
  ContractRoleSchema,
];
// --end-----2022年3月14日, lzg修改后代码,

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
