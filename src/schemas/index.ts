// To help typescript find the type
// --begin--2022.3.14--lzg
// 新增polygon与mumbai
import { mainSchemas } from './main/index';
import { rinkebySchemas } from './rinkeby/index';
import {mumbaiSchemas} from './mumbai/index';
import {polygonMainSchemas} from './polygon/index';

export const schemas = {
  rinkeby: rinkebySchemas,
  main: mainSchemas,
  mumbai: mumbaiSchemas,
  polygon: polygonMainSchemas,
};
// --end--2022.3.14--lzg