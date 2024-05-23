"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThemesIndex = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var utils_1 = require("../utils");
var createThemesIndex = function (outDir, themes) {
    var content = themes
        .map(function (_a) {
        var name = _a.name;
        return "export * as " + name + " from './" + name + "';";
    })
        .join('');
    fs_1.default.writeFileSync(path_1.default.join(outDir, 'index.ts'), utils_1.prettify(content));
};
exports.createThemesIndex = createThemesIndex;
//# sourceMappingURL=createThemesIndex.js.map