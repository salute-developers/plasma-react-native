import { FlexAlignType, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../ThemeProvider';
import { getFontFace } from '../../utils';

import { AlignProp, CardConfig } from './Card.types';
import { getScaleOffset } from './utils';

export interface Style {
    root?: ViewStyle;
    wrapper?: ViewStyle;
    image?: ViewStyle;
    textBox?: ViewStyle;
    title?: TextStyle;
    subtitle?: TextStyle;
    content?: ViewStyle;
    contentTopLeft?: ViewStyle;
    contentTopRight?: ViewStyle;
    contentBottomRight?: ViewStyle;
    contentBottomLeft?: ViewStyle;
    timelineBar?: ViewStyle;
    timelineProgress?: ViewStyle;
}

const alignToFlex: Record<AlignProp, FlexAlignType> = {
    center: 'center',
    left: 'flex-start',
    right: 'flex-end',
};
export const getStyle = (
    theme?: Theme,
    disabledOpacity?: number,
    style?: CardConfig['variations']['size'][string] & CardConfig['variations']['view'][string],
    alignTextBox?: AlignProp,
    timelineValue?: number,
    externalStyle?: Style,
): Style => {
    if (!style || !theme || !alignTextBox) {
        return {
            root: {},
            wrapper: {},
            image: {},
            textBox: {},
            title: {},
            subtitle: {},
            content: {},
            contentTopLeft: {},
            contentTopRight: {},
            contentBottomRight: {},
            contentBottomLeft: {},
            timelineBar: {},
            timelineProgress: {},
        };
    }

    const titleFontFace = getFontFace(style.titleFontFamilyRef, style.titleFontStyle, style.titleFontWeight, theme);

    const subtitleFontFace = getFontFace(
        style.subtitleFontFamilyRef,
        style.subtitleFontStyle,
        style.subtitleFontWeight,
        theme,
    );

    return StyleSheet.create({
        root: {
            opacity: disabledOpacity,
            width: style.width,
            ...externalStyle?.root,
        },
        wrapper: {
            height: style.height,
            borderRadius: style.borderRadius,
            ...externalStyle?.wrapper,
        },
        image: {
            width: Math.floor(style.width * style.scale),
            height: Math.floor(style.height * style.scale),
            left: -getScaleOffset(style.width, style.scale),
            top: -getScaleOffset(style.height, style.scale),
            borderRadius: style.borderRadius,
            ...externalStyle?.image,
        },
        textBox: {
            height: 'auto',
            display: 'flex',
            alignItems: alignToFlex[alignTextBox],
            marginTop: 8 + getScaleOffset(style.height, style.scale),
            gap: style.textBoxGap,
            ...externalStyle?.textBox,
        },
        title: {
            color: style.titleColor,
            ...titleFontFace,
            fontSize: style.titleFontSize,
            letterSpacing: style.titleLetterSpacing,
            lineHeight: style.titleLineHeight,
            ...externalStyle?.title,
        },
        subtitle: {
            color: style.subtitleColor,
            ...subtitleFontFace,
            fontSize: style.subtitleFontSize,
            letterSpacing: style.subtitleLetterSpacing,
            lineHeight: style.subtitleLineHeight,
            ...externalStyle?.subtitle,
        },
        content: {
            position: 'absolute',
            overflow: 'hidden',
            backgroundColor: 'transparent',
            borderRadius: style.borderRadius,
            width: Math.floor(style.width * style.scale),
            height: Math.floor(style.height * style.scale),
            left: -getScaleOffset(style.width, style.scale),
            top: -getScaleOffset(style.height, style.scale),
            ...externalStyle?.content,
        },
        contentTopLeft: {
            position: 'absolute',
            top: style.contentPadding,
            left: style.contentPadding,
            ...externalStyle?.contentTopLeft,
        },
        contentTopRight: {
            position: 'absolute',
            top: style.contentPadding,
            right: style.contentPadding,
            ...externalStyle?.contentTopRight,
        },
        contentBottomRight: {
            position: 'absolute',
            bottom: style.contentPadding,
            right: style.contentPadding,
            ...externalStyle?.contentBottomRight,
        },
        contentBottomLeft: {
            position: 'absolute',
            bottom: style.contentPadding,
            left: style.contentPadding,
            ...externalStyle?.contentBottomLeft,
        },
        timelineBar: {
            position: 'absolute',
            bottom: 0,
            width: style.width * style.scale,
            height: 4,
            backgroundColor: '#FFFFFF33',
            ...externalStyle?.timelineBar,
        },
        timelineProgress: {
            position: 'absolute',
            height: 4,
            width: timelineValue !== undefined ? `${timelineValue}%` : 0,
            backgroundColor: '#FFFFFF',
            ...externalStyle?.timelineProgress,
        },
    });
};
