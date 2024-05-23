"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var _1 = require(".");
var utils_1 = require("../utils");
var createTheme = function (outDir, themeSource) {
    var meta = themeSource.meta, variations = themeSource.variations;
    var metaGrouped = utils_1.getMetaGrouped(meta);
    var themeDir = path_1.default.join(outDir, meta.name);
    fs_1.default.existsSync(themeDir) || fs_1.default.mkdirSync(themeDir);
    _1.createColorTokens(themeDir, variations.color, metaGrouped.color);
    _1.createGradientTokens(themeDir, variations.gradient, metaGrouped.gradient);
    _1.createShadowTokens(themeDir, variations.shadow, metaGrouped.shadow);
    _1.createShapeTokens(themeDir, variations.shape, metaGrouped.shape);
    _1.createFontFamilyTokens(themeDir, variations.fontFamily, metaGrouped.fontFamily);
    _1.createTypographyTokens(themeDir, variations.typography, variations.fontFamily, metaGrouped.typography);
    _1.createIndex(themeDir, metaGrouped);
};
exports.createTheme = createTheme;
//# sourceMappingURL=createTheme.js.map