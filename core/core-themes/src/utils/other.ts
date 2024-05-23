import fs from 'fs';
import path from 'path';
import parserTypeScript from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import type { Options } from 'prettier';

export const kebabToCamel = (str: string) =>
    str.replace(/-([a-z])/g, (_, group) => group.toUpperCase()).replace(/^./, (char) => char.toLowerCase());

const prettierSetting: Options = {
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

export const prettify = (source: string) => prettier.format(source, prettierSetting);

export const readTokens = (srcDir: string, fileName: string) =>
    JSON.parse(fs.readFileSync(path.join(srcDir, fileName), { encoding: 'utf-8' }));

export const writeTokens = (content: string, outDir: string, fileName: string) =>
    fs.writeFileSync(path.join(outDir, fileName), prettify(content).replace(/;/gim, ' as const;'));
