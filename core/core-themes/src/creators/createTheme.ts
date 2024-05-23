import path from 'path';
import fs from 'fs';

import { getMetaGrouped } from '../utils';
import { ThemeSource } from '../types';

import {
    createColorTokens,
    createFontFamilyTokens,
    createGradientTokens,
    createShadowTokens,
    createShapeTokens,
    createTypographyTokens,
    createIndex,
} from '.';

export const createTheme = (outDir: string, themeSource: ThemeSource) => {
    const { meta, variations } = themeSource;
    const metaGrouped = getMetaGrouped(meta);

    const themeDir = path.join(outDir, meta.name);
    fs.existsSync(themeDir) || fs.mkdirSync(themeDir);

    createColorTokens(themeDir, variations.color, metaGrouped.color);
    createGradientTokens(themeDir, variations.gradient, metaGrouped.gradient);
    createShadowTokens(themeDir, variations.shadow, metaGrouped.shadow);
    createShapeTokens(themeDir, variations.shape, metaGrouped.shape);
    createFontFamilyTokens(themeDir, variations.fontFamily, metaGrouped.fontFamily);
    createTypographyTokens(themeDir, variations.typography, variations.fontFamily, metaGrouped.typography);

    createIndex(themeDir, metaGrouped);
};
