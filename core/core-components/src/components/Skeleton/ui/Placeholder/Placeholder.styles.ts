import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../../../ThemeProvider';

import { Roundness } from './Placeholder.types';

export interface Style {
    root?: ViewStyle;
    placeholder?: ViewStyle;
}

export const getStyle = (
    theme?: Theme,
    width?: number | string,
    windowWidth?: number,
    height?: number,
    margin?: number,
    roundness?: Roundness,
    externalStyle?: Style,
): Style => {
    if (!theme) {
        return {
            root: {},
            placeholder: {},
        };
    }

    return StyleSheet.create({
        root: {
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: roundness,
            width,
            height,
            marginTop: margin,
            marginBottom: margin,
            backgroundColor: 'transparent', // INFO: Нужно проставлять значение для работы overflow:hidden на android-tv
            ...externalStyle?.root,
        } as ViewStyle,
        placeholder: {
            position: 'absolute',
            width: windowWidth,
            height,
            ...externalStyle?.placeholder,
        },
    });
};
