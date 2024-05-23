import fs from 'fs';
import path from 'path';
import { prettify } from '../utils';
export var createRootIndex = function (themesDir) {
    var content = "export * from './themes';";
    fs.writeFileSync(path.join(themesDir, 'index.ts'), prettify(content));
};
//# sourceMappingURL=createRootIndex.js.map