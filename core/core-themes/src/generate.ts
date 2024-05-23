import fs from 'fs';
import path from 'path';

import { createThemesIndex, createTheme, createRootIndex } from './creators';
import { ThemeRequest } from './types';
import { readTheme } from './utils';

export const generate = async (themes: ThemeRequest[]) => {
    const outDir = 'src';
    fs.existsSync(outDir) || fs.mkdirSync(outDir);

    const themesDir = path.join(outDir, 'themes');
    fs.existsSync(themesDir) || fs.mkdirSync(themesDir);

    for (const theme of themes) {
        // eslint-disable-next-line no-await-in-loop
        const themeSource = await readTheme(theme.name, theme.version);
        createTheme(themesDir, themeSource);
    }

    createThemesIndex(themesDir, themes);

    createRootIndex(outDir);
};
