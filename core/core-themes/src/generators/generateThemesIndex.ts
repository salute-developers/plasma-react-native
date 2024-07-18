import fs from 'fs';
import path from 'path';

import { prettify } from '../utils';
import { ThemeRequest } from '../types';

export const generateThemesIndex = (outDir: string, themes: ThemeRequest[]) => {
    const content = themes
        .map(({ name }) => {
            return `export * as ${name} from './${name}';`;
        })
        .join('');

    fs.writeFileSync(path.join(outDir, 'index.ts'), prettify(content));
};
