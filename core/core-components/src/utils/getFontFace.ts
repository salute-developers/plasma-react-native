import { Theme } from '../components/ThemeProvider';

export const getFontFace = (fontFamilyRef: string, fontStyle: string, fontWeight: string, theme: Theme) => {
    const [, kind] = fontFamilyRef.split('.');

    const fonts = theme.data.fontFamily[kind]?.fonts;

    const result = fonts.find((font) => {
        return font.fontStyle === fontStyle && font.fontWeight === fontWeight;
    });

    if (!result) {
        return {
            fontWeight,
            fontStyle,
        };
    }

    return {
        fontFamily: result.fileName,
        fontWeight,
        fontStyle,
    };
};
