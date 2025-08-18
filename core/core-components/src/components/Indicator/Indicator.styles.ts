import { StyleSheet, ViewStyle } from 'react-native';

import { IndicatorConfig } from './Indicator.types';

export interface Style {
    root?: ViewStyle;
}

export const getStyle = (
    viewStyle?: IndicatorConfig['variations']['view'][string],
    sizeStyle?: IndicatorConfig['variations']['size'][string],
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle) {
        return {
            root: {},
        };
    }

    return StyleSheet.create({
        root: {
            width: sizeStyle.size,
            height: sizeStyle.size,
            borderRadius: sizeStyle.size / 2,
            backgroundColor: viewStyle.color,
            ...externalStyle?.root,
        },
    });
};
