import { StyleSheet, ViewStyle } from 'react-native';

import { DividerConfig, OrientationProp } from './Divider.types';

export interface Style {
    root?: ViewStyle;
}

export const getStyle = (
    viewStyle?: DividerConfig['variations']['view'][string],
    sizeStyle?: DividerConfig['variations']['size'][string],
    orientationStyle?: DividerConfig['variations']['orientation'][string],
    length?: number,
    orientation?: OrientationProp,
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle || !orientationStyle) {
        return {
            root: {},
        };
    }

    console.log('orientation', orientation);

    return StyleSheet.create({
        root: {
            width: orientation === 'vertical' ? orientationStyle.baseSideSize : `${length ?? 100}%`,
            height: orientation === 'vertical' ? `${length ?? 100}%` : orientationStyle.baseSideSize,
            borderRadius: sizeStyle.borderRadius,
            backgroundColor: viewStyle.background,
            ...externalStyle?.root,
        },
    });
};
