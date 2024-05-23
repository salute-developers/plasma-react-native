"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeTokens = exports.readTokens = exports.prettify = exports.kebabToCamel = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var parser_babel_1 = __importDefault(require("prettier/parser-babel"));
var standalone_1 = __importDefault(require("prettier/standalone"));
var kebabToCamel = function (str) {
    return str.replace(/-([a-z])/g, function (_, group) { return group.toUpperCase(); }).replace(/^./, function (char) { return char.toLowerCase(); });
};
exports.kebabToCamel = kebabToCamel;
var prettierSetting = {
    plugins: [parser_babel_1.default],
    parser: 'babel',
    printWidth: 120,
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    endOfLine: 'auto',
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
};
var prettify = function (source) { return standalone_1.default.format(source, prettierSetting); };
exports.prettify = prettify;
var readTokens = function (srcDir, fileName) {
    return JSON.parse(fs_1.default.readFileSync(path_1.default.join(srcDir, fileName), { encoding: 'utf-8' }));
};
exports.readTokens = readTokens;
var writeTokens = function (content, outDir, fileName) {
    return fs_1.default.writeFileSync(path_1.default.join(outDir, fileName), exports.prettify(content).replace(/\;/gim, ' as const;'));
};
exports.writeTokens = writeTokens;
//# sourceMappingURL=other.js.map