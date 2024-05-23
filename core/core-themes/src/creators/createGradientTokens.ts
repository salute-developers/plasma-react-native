import { TokenType } from '../types';
import { kebabToCamel, writeTokens } from '../utils';

const getGradient = (gradient: any, tokens: TokenType[], mode: 'dark' | 'light') =>
    tokens
        .filter((token) => token.tags[0] === mode)
        .map((token) => {
            const [, category, subcategory, name] = token.name.split('.');

            const value = gradient[token.name];
            const tokenName = kebabToCamel([subcategory === 'default' ? '' : subcategory, category, name].join('-'));

            return `/** ${token.description} */\n        ${tokenName}: ${JSON.stringify(value)},`;
        })
        .join('\n        ');

const getContent = (darkGradient: string, lightGradient: string) => `export const gradient = {
    dark: {
        ${darkGradient}
    },
    light: {
        ${lightGradient}
    },
};
`;

export const createGradientTokens = (themeDir: string, gradient: any, tokens?: Array<TokenType>) => {
    if (!tokens?.length) {
        return;
    }

    const darkGradient = getGradient(gradient, tokens, 'dark');
    const lightGradient = getGradient(gradient, tokens, 'light');

    const content = getContent(darkGradient, lightGradient);

    writeTokens(content, themeDir, 'gradient.ts');
};
