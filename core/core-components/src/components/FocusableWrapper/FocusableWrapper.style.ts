import { StyleSheet, ViewStyle } from 'react-native';

import { FocusableWrapperProps } from './FocusableWrapper.types';

export interface Style {
    root?: ViewStyle;
    focus?: ViewStyle;
}

export const getStyle = (style?: FocusableWrapperProps['style'], focused?: boolean): Style => {
    if (!style) {
        return {
            root: {},
            focus: {},
        };
    }

    return StyleSheet.create({
        root: style.root as ViewStyle,
        focus: {
            borderRadius: style.focus?.borderRadius,
            borderWidth: style.focus?.borderWidth,
            borderColor: focused ? style.focus?.borderColor : 'transparent',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        } as ViewStyle,
    });
};
