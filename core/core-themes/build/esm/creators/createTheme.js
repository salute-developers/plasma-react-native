import path from 'path';
import fs from 'fs';
import { createColorTokens, createFontFamilyTokens, createGradientTokens, createShadowTokens, createShapeTokens, createTypographyTokens, createIndex, } from '.';
import { getMetaGrouped } from '../utils';
export var createTheme = function (outDir, themeSource) {
    var meta = themeSource.meta, variations = themeSource.variations;
    var metaGrouped = getMetaGrouped(meta);
    var themeDir = path.join(outDir, meta.name);
    fs.existsSync(themeDir) || fs.mkdirSync(themeDir);
    createColorTokens(themeDir, variations.color, metaGrouped.color);
    createGradientTokens(themeDir, variations.gradient, metaGrouped.gradient);
    createShadowTokens(themeDir, variations.shadow, metaGrouped.shadow);
    createShapeTokens(themeDir, variations.shape, metaGrouped.shape);
    createFontFamilyTokens(themeDir, variations.fontFamily, metaGrouped.fontFamily);
    createTypographyTokens(themeDir, variations.typography, variations.fontFamily, metaGrouped.typography);
    createIndex(themeDir, metaGrouped);
};
//# sourceMappingURL=createTheme.js.map