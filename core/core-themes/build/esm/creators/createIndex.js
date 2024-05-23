import fs from 'fs';
import path from 'path';
import { prettify } from '../utils';
export var createIndex = function (themesDir, metaGrouped) {
    var content = Object.keys(metaGrouped)
        .map(function (type) {
        return "export * from './" + type + "';";
    })
        .join('');
    fs.writeFileSync(path.join(themesDir, 'index.ts'), prettify(content));
};
//# sourceMappingURL=createIndex.js.map