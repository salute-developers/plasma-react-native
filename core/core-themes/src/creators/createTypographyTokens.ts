import { TokenType } from '../types';
import { kebabToCamel, writeTokens } from '../utils';

const getTypography = (typography: any, tokens: TokenType[], size: 'screen-s' | 'screen-m' | 'screen-l') =>
    tokens
        .filter((token) => token.tags[0] === size)
        .map((token) => {
            const [, ...rest] = token.name.split('.');
            const value = typography[token.name];

            const tokenName = kebabToCamel(rest.join('-'));

            return `/** ${token.description} */\n        ${tokenName}: ${JSON.stringify(value)},`;
        })
        .join('\n        ');

const getContent = (
    screenSTypography: string,
    screenMTypography: string,
    screenLTypography: string,
) => `export const typography = {
    screenS: {
        ${screenSTypography}
    },
    screenM: {
        ${screenMTypography}
    },
    screenL: {
        ${screenLTypography}
    },
};
`;

export const createTypographyTokens = (themeDir: string, typography: any, tokens?: Array<TokenType>) => {
    if (!tokens?.length) {
        return;
    }

    const screenSTypography = getTypography(typography, tokens, 'screen-s');
    const screenMTypography = getTypography(typography, tokens, 'screen-m');
    const screenLTypography = getTypography(typography, tokens, 'screen-l');

    const content = getContent(screenSTypography, screenMTypography, screenLTypography);

    writeTokens(content, themeDir, 'typography.ts');
};
