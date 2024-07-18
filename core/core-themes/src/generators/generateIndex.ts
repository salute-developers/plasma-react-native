import fs from 'fs';
import path from 'path';

import { prettify } from '../utils';
import { MetaGrouped } from '../types';

export const generateIndex = (themesDir: string, metaGrouped: MetaGrouped) => {
    const content = Object.keys(metaGrouped)
        .map((type) => {
            return `export * from './${type}';`;
        })
        .join('');

    fs.writeFileSync(path.join(themesDir, 'index.ts'), prettify(content));
};
