import { StyleSheet, TextStyle } from 'react-native';

import { Theme } from '../ThemeProvider';
import { getFontFace } from '../../utils';

import { TypographyConfig } from './Typography.types';

export interface Style {
    root?: TextStyle;
}

export const getStyle = (
    theme?: Theme,
    bold?: boolean,
    viewStyle?: TypographyConfig['variations']['view'][string],
    sizeStyle?: TypographyConfig['variations']['size'][string],
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle || !theme) {
        return {
            root: {},
        };
    }

    const fontWeight = bold ? sizeStyle.fontWeightBold : sizeStyle.fontWeight;

    const fontFace = getFontFace(sizeStyle.fontFamilyRef, sizeStyle.fontStyle, fontWeight, theme);

    return StyleSheet.create({
        root: {
            color: viewStyle.color,
            ...fontFace,
            fontSize: sizeStyle.fontSize,
            letterSpacing: sizeStyle.letterSpacing,
            lineHeight: sizeStyle.lineHeight,
            ...externalStyle?.root,
        },
    });
};
