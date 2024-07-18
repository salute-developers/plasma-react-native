import fs from 'fs';
import path from 'path';

import { ThemeRequest } from './types';
import { readTheme } from './utils';
import { generateRootIndex, generateTheme, generateThemesIndex } from './generators';

export const generate = async (themes: ThemeRequest[]) => {
    const outDir = 'src';
    fs.existsSync(outDir) || fs.mkdirSync(outDir);

    const themesDir = path.join(outDir, 'themes');
    fs.existsSync(themesDir) || fs.mkdirSync(themesDir);

    for (const theme of themes) {
        // eslint-disable-next-line no-await-in-loop
        const themeSource = await readTheme(theme.name, theme.version);
        generateTheme(themesDir, themeSource);
    }

    generateThemesIndex(themesDir, themes);

    generateRootIndex(outDir);
};
