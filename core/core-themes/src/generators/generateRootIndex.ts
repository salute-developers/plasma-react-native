import fs from 'fs';
import path from 'path';

import { prettify } from '../utils';

export const generateRootIndex = (themesDir: string) => {
    const content = "export * from './themes';";

    fs.writeFileSync(path.join(themesDir, 'index.ts'), prettify(content));
};
