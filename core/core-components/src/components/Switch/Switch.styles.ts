import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../ThemeProvider';
import { getFontFace } from '../../utils';

import { SwitchConfig } from './Switch.types';

export interface Style {
    root?: ViewStyle;
    wrapper?: ViewStyle;
    label?: TextStyle;
    track?: ViewStyle;
    thumb?: ViewStyle;
    description?: TextStyle;
}

export const getStyle = (
    theme?: Theme,
    disabledOpacity?: number,
    viewStyle?: SwitchConfig['variations']['view'][string],
    sizeStyle?: SwitchConfig['variations']['size'][string],
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle || !theme) {
        return {
            root: {},
            wrapper: {},
            label: {},
            track: {},
            thumb: {},
        };
    }

    const labelFontFace = getFontFace(
        sizeStyle.labelFontFamilyRef,
        sizeStyle.labelFontStyle,
        sizeStyle.labelFontWeight,
        theme,
    );

    const descriptionFontFace = getFontFace(
        sizeStyle.descriptionFontFamilyRef,
        sizeStyle.descriptionFontStyle,
        sizeStyle.descriptionFontWeight,
        theme,
    );

    return StyleSheet.create({
        root: {
            opacity: disabledOpacity,
            display: 'flex',
            flexDirection: 'column',
            ...externalStyle?.root,
        },
        wrapper: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            ...externalStyle?.wrapper,
        },
        label: {
            flexShrink: 1,
            marginRight: sizeStyle.labelOffset,
            color: viewStyle.labelColor,
            ...labelFontFace,
            fontSize: sizeStyle.labelFontSize,
            letterSpacing: sizeStyle.labelLetterSpacing,
            lineHeight: sizeStyle.labelLineHeight,
            ...externalStyle?.label,
        },
        track: {
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            width: sizeStyle.trackWidth,
            height: sizeStyle.trackHeight,
            borderRadius: sizeStyle.trackBorderRadius,
            ...externalStyle?.track,
        },
        thumb: {
            position: 'absolute',
            margin: sizeStyle.thumbOffset,
            backgroundColor: viewStyle.thumbBackgroundColor,
            height: sizeStyle.thumbSize,
            borderRadius: sizeStyle.thumbBorderRadius,
            elevation: viewStyle.thumbShadow.elevation,
            shadowColor: viewStyle.thumbShadow.color,
            shadowOffset: {
                width: viewStyle.thumbShadow.offsetWidth,
                height: viewStyle.thumbShadow.offsetHeight,
            },
            shadowOpacity: viewStyle.thumbShadow.opacity,
            shadowRadius: viewStyle.thumbShadow.radius,
            ...externalStyle?.thumb,
        },
        description: {
            marginTop: sizeStyle.descriptionMarginTop,
            color: viewStyle.descriptionColor,
            ...descriptionFontFace,
            fontSize: sizeStyle.descriptionFontSize,
            letterSpacing: sizeStyle.descriptionLetterSpacing,
            lineHeight: sizeStyle.descriptionLineHeight,
            ...externalStyle?.description,
        },
    });
};
