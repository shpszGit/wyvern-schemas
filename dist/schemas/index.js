"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// --begin--2022.3.14--lzg
// 新增polygon与mumbai
const index_1 = require("./main/index");
const index_2 = require("./mumbai/index");
const index_3 = require("./polygon/index");
const index_4 = require("./rinkeby/index");
exports.schemas = {
    rinkeby: index_4.rinkebySchemas,
    main: index_1.mainSchemas,
    mumbai: index_2.mumbaiSchemas,
    polygon: index_3.polygonMainSchemas,
};
// --end--2022.3.14--lzg
//# sourceMappingURL=index.js.map