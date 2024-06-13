import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../ThemeProvider';
import { getFontFace } from '../../utils';

import { ProgressConfig } from './Progress.types';

export interface Style {
    root?: ViewStyle;
    bar?: ViewStyle;
    progress?: ViewStyle;
    track?: ViewStyle;
    value?: TextStyle;
}

export const getStyle = (
    theme?: Theme,
    viewStyle?: ProgressConfig['variations']['view'][string],
    sizeStyle?: ProgressConfig['variations']['size'][string],
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle || !theme) {
        return {
            root: {},
            bar: {},
            progress: {},
            track: {},
            value: {},
        };
    }

    const fontFace = getFontFace(sizeStyle.fontFamilyRef, sizeStyle.fontStyle, sizeStyle.fontWeight, theme);

    return StyleSheet.create({
        root: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: 20,
            ...externalStyle?.root,
        },
        bar: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            ...externalStyle?.bar,
        },
        progress: {
            width: '100%',
            position: 'absolute',
            height: sizeStyle?.progressFilledHeight,
            ...externalStyle?.progress,
        },
        track: {
            width: '100%',
            backgroundColor: viewStyle.trackBackgroundColor,
            height: sizeStyle.trackHeight,
            borderRadius: sizeStyle.trackBorderRadius,
            ...externalStyle?.track,
        },
        value: {
            marginLeft: sizeStyle.valueMarginLeft,
            color: viewStyle.valueColor,
            ...fontFace,
            fontSize: sizeStyle.fontSize,
            letterSpacing: sizeStyle.letterSpacing,
            lineHeight: sizeStyle.lineHeight,
            ...externalStyle?.value,
        },
    });
};
