// ---begin----2022年3月14日-lzg-------

// 与乔帮主微信沟通，乔帮主：“把 index.ts 中除了 ERC721、ERC20、ERC1155 和 OwnableContractSchema 之外的 schema 注释掉”
// 和乔帮主确认，下面两个不注释。Schema 和 ContractRoleSchema
import { Schema } from '../../types';
import { ContractRoleSchema } from '../ContractRole/index';
import { ERC1155Schema } from '../ERC1155';
import { ERC20Schema } from '../ERC20';
import { ERC721Schema, ERC721v3Schema } from '../ERC721/index';

// import { CryptoKittiesSchema } from './CryptoKitties/index';
// import { CryptoPunksSchema } from './CryptoPunks/index';
// import { EnjinItemSchema } from './EnjinItem';
// import { ENSNameSchema } from './ENSName/index';
// import { ENSShortNameAuctionSchema } from './ENSShortNameAuction/index';
// 同步更新polygonOwnableContract
import { polygonOwnableContractSchema } from './polygonOwnableContract/index';

// 同步更新polygonOwnableContractSchema
// 同步更新polygonMainSchemas
export const polygonMainSchemas: Array<Schema<any>> = [
  polygonOwnableContractSchema,
  ERC20Schema,
  ERC721Schema,
  ERC721v3Schema,
  ERC1155Schema,
  ContractRoleSchema,

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