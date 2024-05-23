import { TokenType } from '../types';
import { kebabToCamel, writeTokens } from '../utils';

const getShadow = (shadow: any, tokens: TokenType[], direction: 'down' | 'up') =>
    tokens
        .filter((token) => token.tags[0] === direction)
        .map((token) => {
            const [, ...rest] = token.name.split('.');
            const value = shadow[token.name];
            const tokenName = kebabToCamel(rest.join('-'));

            return `/** ${token.description} */\n        ${tokenName}: ${JSON.stringify(value)},`;
        })
        .join('\n        ');

const getContent = (downShadow: string, upShadow: string) => `export const shadow = {
    down: {
        ${downShadow}
    },
    up: {
        ${upShadow}
    },
};
`;

export const createShadowTokens = (themeDir: string, shadow: any, tokens?: Array<TokenType>) => {
    if (!tokens?.length) {
        return;
    }

    const downShadow = getShadow(shadow, tokens, 'down');
    const upShadow = getShadow(shadow, tokens, 'up');

    const content = getContent(downShadow, upShadow);

    writeTokens(content, themeDir, 'shadow.ts');
};
