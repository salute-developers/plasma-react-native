import { StyleSheet, ViewStyle } from 'react-native';

import { ListConfig } from '../../List.types';

export interface Style {
    root?: ViewStyle;
    background?: ViewStyle;
}

export const getStyle = (
    viewStyle?: ListConfig['variations']['view'][string],
    sizeStyle?: ListConfig['variations']['size'][string],
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle) {
        return {
            root: {},
            background: {},
        };
    }

    return StyleSheet.create({
        root: {
            position: 'relative',
            paddingTop: sizeStyle.itemPaddingTop,
            paddingRight: sizeStyle.itemPaddingRight,
            paddingBottom: sizeStyle.itemPaddingBottom,
            paddingLeft: sizeStyle.itemPaddingLeft,
            ...externalStyle?.root,
        },
        background: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            borderRadius: sizeStyle?.itemBorderRadius,
            ...externalStyle?.background,
        },
    });
};
