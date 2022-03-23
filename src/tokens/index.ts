// To help typescript find the type
import { NetworkTokens } from '../types';

// --begin--2022.3.14--lzg
// 新增polygon与mumbai

// --begin--2022.3.14--lzg
// 新增polygon与mumbai
import { mainTokens } from './main/index';
import {mumbaiTokens} from './mumbai/index';
import {polygonMainTokens} from './polygon/index';
import { rinkebyTokens } from './rinkeby/index';

export const tokens = {
  rinkeby: rinkebyTokens,
  main: mainTokens,
  mumbai: mumbaiTokens,
  polygon: polygonMainTokens,
};
// --end--2022.3.14--lzg
