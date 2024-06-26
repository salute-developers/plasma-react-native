import { FontStyle, FontWeight, Theme } from '../components/ThemeProvider';

interface FontFace {
    fontFamily?: string;
    fontWeight: FontWeight;
    fontStyle: FontStyle;
}

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
        } as FontFace;
    }

    return {
        fontFamily: result.fileName,
        fontWeight,
        fontStyle,
    } as FontFace;
};
