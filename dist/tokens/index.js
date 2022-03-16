"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// To help typescript find the type
// --begin--2022.3.14--lzg
// 新增polygon与mumbai
const index_1 = require("./main/index");
const index_2 = require("./rinkeby/index");
const index_3 = require("./mumbai/index");
const index_4 = require("./polygon/index");
exports.tokens = {
    rinkeby: index_2.rinkebyTokens,
    main: index_1.mainTokens,
    mumbai: index_3.mumbaiTokens,
    polygon: index_4.polygonMainTokens,
};
// --end--2022.3.14--lzg
//# sourceMappingURL=index.js.map