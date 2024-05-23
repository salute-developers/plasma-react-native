import fs from 'fs';
import path from 'path';
import parserTypeScript from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
export var kebabToCamel = function (str) {
    return str.replace(/-([a-z])/g, function (_, group) { return group.toUpperCase(); }).replace(/^./, function (char) { return char.toLowerCase(); });
};
var prettierSetting = {
    plugins: [parserTypeScript],
    parser: 'babel',
    printWidth: 120,
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    endOfLine: 'auto',
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
};
export var prettify = function (source) { return prettier.format(source, prettierSetting); };
export var readTokens = function (srcDir, fileName) {
    return JSON.parse(fs.readFileSync(path.join(srcDir, fileName), { encoding: 'utf-8' }));
};
export var writeTokens = function (content, outDir, fileName) {
    return fs.writeFileSync(path.join(outDir, fileName), prettify(content).replace(/\;/gim, ' as const;'));
};
//# sourceMappingURL=other.js.map