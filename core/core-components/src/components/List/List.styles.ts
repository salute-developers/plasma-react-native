import { StyleSheet, ViewStyle } from 'react-native';

import { Theme } from '../ThemeProvider';

import { ListConfig } from './List.types';

export interface Style {
    root?: ViewStyle;
}

export const getStyle = (
    theme?: Theme,
    viewStyle?: ListConfig['variations']['view'][string],
    sizeStyle?: ListConfig['variations']['size'][string],
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle || !theme) {
        return {
            root: {},
        };
    }

    return StyleSheet.create({
        root: {
            width: '100%',
            ...externalStyle?.root,
        },
    });
};
