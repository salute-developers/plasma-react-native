import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../ThemeProvider';
import { getFontFace, getWidthSize, Stretching } from '../../utils';

import { ButtonConfig } from './Button.types';
import { getRoundnessMatrix, Pin } from './utils';

export interface Style {
    root?: ViewStyle;
    background?: ViewStyle;
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
            background: {},
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
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: sizeStyle.padding,
            paddingRight: sizeStyle.padding,
            height: sizeStyle.height,
            ...widthSize,
            ...externalStyle?.root,
        },
        background: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: pressed ? viewStyle.backgroundColorActive : viewStyle.backgroundColor,
            transform: [
                {
                    scale: viewStyle.scale ?? 1,
                },
            ],
            ...buttonBorderRadius,
            ...externalStyle?.background,
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
