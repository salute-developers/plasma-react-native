import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../ThemeProvider';
import { getFontFace, getWidthSize, Stretching } from '../../utils';

import { ButtonConfig, Spacing } from './Button.types';
import { getRoundnessMatrix, Pin } from './utils';

export interface Style {
    root?: ViewStyle;
    background?: ViewStyle;
    wrapper?: ViewStyle;
    loader?: ViewStyle;
    contentWrapper?: ViewStyle;
    contentLeft?: ViewStyle;
    contentRight?: ViewStyle;
    text?: TextStyle;
    value?: TextStyle;
}

export const getStyle = (
    theme?: Theme,
    disabledOpacity?: number,
    viewStyle?: ButtonConfig['variations']['view'][string],
    sizeStyle?: ButtonConfig['variations']['size'][string],
    pressed?: boolean,
    spacing?: Spacing,
    stretching?: Stretching,
    pin?: Pin,
    isLoading?: boolean,
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle || !pin || !spacing || !theme) {
        return {
            root: {},
            background: {},
            wrapper: {},
            loader: {},
            contentWrapper: {},
            contentLeft: {},
            contentRight: {},
            text: {},
            value: {},
        };
    }

    const widthSize = getWidthSize(stretching, sizeStyle.width);
    const buttonBorderRadius = getRoundnessMatrix(pin, sizeStyle.radius, sizeStyle.height);
    const fontFace = getFontFace(sizeStyle.fontFamilyRef, sizeStyle.fontStyle, sizeStyle.fontWeight, theme);

    const spacingMap: Record<Spacing, 'space-between' | 'center'> = {
        packed: 'center',
        'space-between': 'space-between',
    };

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
            // TODO: Подумать как обработать кейс, когда кнопка выделена и на неё происходит нажатие
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
            opacity: isLoading ? 0 : 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: stretching === 'auto' ? undefined : spacingMap[spacing],
            ...externalStyle?.wrapper,
        },
        loader: {
            position: 'absolute',
            ...externalStyle?.loader,
        },
        contentWrapper: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            ...externalStyle?.contentWrapper,
        },
        contentLeft: {
            paddingRight: sizeStyle.contentGap,
            ...externalStyle?.contentLeft,
        },
        contentRight: {
            paddingLeft: sizeStyle.contentGap,
            ...externalStyle?.contentRight,
        },
        text: {
            color: viewStyle.color,
            ...fontFace,
            fontSize: sizeStyle.fontSize,
            letterSpacing: sizeStyle.letterSpacing,
            lineHeight: sizeStyle.lineHeight,
            ...externalStyle?.text,
        } as TextStyle,
        value: {
            opacity: 0.56,
            paddingLeft: sizeStyle.valueGap,
            color: viewStyle.color,
            ...fontFace,
            fontSize: sizeStyle.fontSize,
            letterSpacing: sizeStyle.letterSpacing,
            lineHeight: sizeStyle.lineHeight,
            ...externalStyle?.value,
        } as TextStyle,
    });
};
