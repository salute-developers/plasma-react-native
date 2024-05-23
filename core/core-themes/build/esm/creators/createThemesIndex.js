import fs from 'fs';
import path from 'path';
import { prettify } from '../utils';
export var createThemesIndex = function (outDir, themes) {
    var content = themes
        .map(function (_a) {
        var name = _a.name;
        return "export * as " + name + " from './" + name + "';";
    })
        .join('');
    fs.writeFileSync(path.join(outDir, 'index.ts'), prettify(content));
};
//# sourceMappingURL=createThemesIndex.js.map