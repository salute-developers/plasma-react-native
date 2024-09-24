import { StyleSheet, ViewStyle } from 'react-native';

import { ListConfig } from '../../List.types';

export interface Style {
    root?: ViewStyle;
    background?: ViewStyle;
}

export const getStyle = (
    viewStyle?: ListConfig['variations']['view'][string],
    sizeStyle?: ListConfig['variations']['size'][string],
    focused?: boolean,
    selected?: boolean,
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle) {
        return {
            root: {},
            background: {},
        };
    }

    const backgroundColor = selected ? viewStyle?.itemBackgroundColorSelect : 'transparent';

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
            backgroundColor: focused ? viewStyle?.itemBackgroundColorFocus : backgroundColor,
            transform: [
                {
                    scale: focused ? viewStyle?.itemScale : 1,
                },
            ],
            ...externalStyle?.background,
        },
    });
};
