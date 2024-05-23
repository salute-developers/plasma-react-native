import { getRestoredColorFromPalette } from '@salutejs/plasma-tokens-utils';

import { TokenType } from '../types';
import { kebabToCamel, writeTokens } from '../utils';

const getColor = (color: any, tokens: TokenType[], mode: 'dark' | 'light') =>
    tokens
        .filter((token) => token.tags[0] === mode)
        .map((token) => {
            const [, category, subcategory, name] = token.name.split('.');
            const value = color[token.name];
            // TODO: Исправить этот метод, т.к. сейчас отдаются некорректные значения с прозрачностью
            const restoredValue = getRestoredColorFromPalette(value);
            const tokenName = kebabToCamel([subcategory === 'default' ? '' : subcategory, category, name].join('-'));

            return `/** ${token.description} */\n        ${tokenName}: '${restoredValue}',`;
        })
        .join('\n        ');

const getContent = (darkColor: string, lightColor: string) => `export const color = {
    dark: {
        ${darkColor}
    },
    light: {
        ${lightColor}
    },
};
`;

export const createColorTokens = async (themeDir: string, color: any, tokens?: Array<TokenType>) => {
    if (!tokens?.length) {
        return;
    }

    const darkColor = getColor(color, tokens, 'dark');
    const lightColor = getColor(color, tokens, 'light');

    const content = getContent(darkColor, lightColor);

    writeTokens(content, themeDir, 'color.ts');
};
