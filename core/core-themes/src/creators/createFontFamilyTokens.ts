import { TokenType } from '../types';
import { kebabToCamel, writeTokens } from '../utils';

const getFontFamily = (fontFamily: any, tokens: TokenType[], kind: 'display' | 'header' | 'text' | 'body') =>
    tokens
        .filter((token) => token.tags[0] === kind)
        .map((token) => {
            const rest = token.name.split('.');
            const value = fontFamily[token.name];
            const tokenName = kebabToCamel(rest.join('-'));

            const fonts = value.fonts.map((font: any) => {
                const fileName = font.link.match(/0.2.0\/(.*).otf/im)[1];
                return {
                    fileName,
                    ...font,
                };
            });
            const newValue = {
                name: value.name,
                fonts,
            };

            return `/** ${token.description} */\n        ${tokenName}: ${JSON.stringify(newValue)},`;
        })
        .join('\n        ');

const getContent = (
    displayFontFamily: string,
    headerFontFamily: string,
    textFontFamily: string,
    bodyFontFamily: string,
) => `export const fontFamily = {
    ${displayFontFamily}
    ${headerFontFamily}
    ${textFontFamily}
    ${bodyFontFamily}
};
`;

export const createFontFamilyTokens = (themeDir: string, fontFamily: any, tokens?: Array<TokenType>) => {
    if (!tokens?.length) {
        return;
    }

    const displayFontFamily = getFontFamily(fontFamily, tokens, 'display');
    const headerFontFamily = getFontFamily(fontFamily, tokens, 'header');
    const textFontFamily = getFontFamily(fontFamily, tokens, 'text');
    const bodyFontFamily = getFontFamily(fontFamily, tokens, 'body');

    const content = getContent(displayFontFamily, headerFontFamily, textFontFamily, bodyFontFamily);

    writeTokens(content, themeDir, 'fontFamily.ts');
};
