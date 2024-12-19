import { TokenType } from '../types';
import { kebabToCamel, writeTokens } from '../utils';

const getSpacing = (spacing: any, tokens: TokenType[], kind: 'spacing') =>
    tokens
        .filter((token) => token.tags[0] === kind)
        .map((token) => {
            const [, ...rest] = token.name.split('.');
            const value = spacing[token.name];
            const tokenName = kebabToCamel(rest.join('-')).replace(/(.*)x/gi, 'x$1');

            return `/** ${token.description} */\n        ${tokenName}: ${JSON.stringify(value.value)},`;
        })
        .join('\n        ');

const getContent = (sizeSpacing: string) => `export const spacing = {
    size: {
        ${sizeSpacing}
    },
};
`;

export const createSpacingTokens = (themeDir: string, spacing: any, tokens?: Array<TokenType>) => {
    if (!tokens?.length) {
        return;
    }

    const sizeSpacing = getSpacing(spacing, tokens, 'spacing');

    const content = getContent(sizeSpacing);

    writeTokens(content, themeDir, 'spacing.ts');
};
