"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// To help typescript find the type
// --begin--2022.3.14--lzg
// 新增polygon与mumbai
const index_1 = require("./main/index");
const index_2 = require("./rinkeby/index");
const index_3 = require("./mumbai/index");
const index_4 = require("./polygon/index");
exports.schemas = {
    rinkeby: index_2.rinkebySchemas,
    main: index_1.mainSchemas,
    mumbai: index_3.mumbaiSchemas,
    polygon: index_4.polygonMainSchemas,
};
// --end--2022.3.14--lzg
//# sourceMappingURL=index.js.map