"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRootIndex = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var utils_1 = require("../utils");
var createRootIndex = function (themesDir) {
    var content = "export * from './themes';";
    fs_1.default.writeFileSync(path_1.default.join(themesDir, 'index.ts'), utils_1.prettify(content));
};
exports.createRootIndex = createRootIndex;
//# sourceMappingURL=createRootIndex.js.map