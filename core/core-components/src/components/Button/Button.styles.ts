import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../ThemeProvider';
import { getFontFace } from '../../utils';

import { ButtonConfig, Stretching } from './Button.types';
import { getWidthSize, getRoundnessMatrix, Pin } from './utils';

export interface Style {
    root?: ViewStyle;
    container?: ViewStyle;
    wrapper?: ViewStyle;
    loader?: ViewStyle;
    text?: TextStyle;
}

export const getStyle = (
    theme?: Theme,
    disabledOpacity?: number,
    viewStyle?: ButtonConfig['variations']['view'][string],
    sizeStyle?: ButtonConfig['variations']['size'][string],
    pressed?: boolean,
    stretching?: Stretching,
    pin?: Pin,
    isLoading?: boolean,
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle || !pin || !theme) {
        return {
            root: {},
            container: {},
            wrapper: {},
            loader: {},
            text: {},
        };
    }

    const widthSize = getWidthSize(stretching, sizeStyle.width);
    const buttonBorderRadius = getRoundnessMatrix(pin, sizeStyle.radius, sizeStyle.height);
    const fontFace = getFontFace(sizeStyle.fontFamilyRef, sizeStyle.fontStyle, sizeStyle.fontWeight, theme);

    return StyleSheet.create({
        root: {
            opacity: disabledOpacity,
            ...externalStyle?.root,
        },
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: sizeStyle.radius,
            paddingLeft: sizeStyle.padding,
            paddingRight: sizeStyle.padding,
            backgroundColor: pressed ? viewStyle.backgroundColorActive : viewStyle.backgroundColor,
            height: sizeStyle.height,
            ...widthSize,
            ...buttonBorderRadius,
            ...externalStyle?.container,
        },
        wrapper: {
            width: '100%',
            gap: sizeStyle.contentGap,
            opacity: isLoading ? 0 : 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: stretching === 'auto' ? undefined : 'center',
            ...externalStyle?.wrapper,
        },
        loader: {
            position: 'absolute',
            ...externalStyle?.loader,
        },
        text: {
            color: viewStyle.color,
            ...fontFace,
            fontSize: sizeStyle.fontSize,
            letterSpacing: sizeStyle.letterSpacing,
            lineHeight: sizeStyle.lineHeight,
            ...externalStyle?.text,
        } as TextStyle,
    });
};
