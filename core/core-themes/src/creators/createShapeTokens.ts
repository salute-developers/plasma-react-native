import { TokenType } from '../types';
import { kebabToCamel, writeTokens } from '../utils';

const getShape = (shape: any, tokens: TokenType[], kind: 'round') =>
    tokens
        .filter((token) => token.tags[0] === kind)
        .map((token) => {
            const [, ...rest] = token.name.split('.');
            const value = shape[token.name];
            const tokenName = kebabToCamel(rest.join('-'));

            return `/** ${token.description} */\n        ${tokenName}: ${JSON.stringify(value.cornerRadius)},`;
        })
        .join('\n        ');

const getContent = (roundShape: string) => `export const shape = {
    round: {
        ${roundShape}
    },
};
`;

export const createShapeTokens = (themeDir: string, shape: any, tokens?: Array<TokenType>) => {
    if (!tokens?.length) {
        return;
    }

    const roundShape = getShape(shape, tokens, 'round');

    const content = getContent(roundShape);

    writeTokens(content, themeDir, 'shape.ts');
};
