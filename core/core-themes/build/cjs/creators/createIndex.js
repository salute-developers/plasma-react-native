"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIndex = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var utils_1 = require("../utils");
var createIndex = function (themesDir, metaGrouped) {
    var content = Object.keys(metaGrouped)
        .map(function (type) {
        return "export * from './" + type + "';";
    })
        .join('');
    fs_1.default.writeFileSync(path_1.default.join(themesDir, 'index.ts'), utils_1.prettify(content));
};
exports.createIndex = createIndex;
//# sourceMappingURL=createIndex.js.map