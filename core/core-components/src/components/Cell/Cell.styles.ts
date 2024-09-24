import { FlexAlignType, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../ThemeProvider';
import { getFontFace, getWidthSize, Stretching } from '../../utils';

import { AlignProp, CellConfig } from './Cell.types';

export interface Style {
    root?: ViewStyle;
    container?: ViewStyle;
    contentLeft?: ViewStyle;
    content?: ViewStyle;
    label?: TextStyle;
    title?: TextStyle;
    subtitle?: TextStyle;
    contentRight: ViewStyle;
    contentRightText: TextStyle;
}

const alignToFlex: Record<AlignProp, FlexAlignType> = {
    center: 'center',
    top: 'flex-start',
    bottom: 'flex-end',
};

export const getStyle = (
    theme?: Theme,
    viewStyle?: CellConfig['variations']['view'][string],
    sizeStyle?: CellConfig['variations']['size'][string],
    alignContentLeft?: AlignProp,
    alignContentRight?: AlignProp,
    stretching?: Stretching,
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle || !theme || !alignContentLeft || !alignContentRight) {
        return {
            root: {},
            contentLeft: {},
            container: {},
            content: {},
            label: {},
            title: {},
            subtitle: {},
            contentRight: {},
            contentRightText: {},
        };
    }

    const widthSize = getWidthSize(stretching, sizeStyle.width);

    const labelFontFace = getFontFace(
        sizeStyle.labelFontFamilyRef,
        sizeStyle.labelFontStyle,
        sizeStyle.labelFontWeight,
        theme,
    );

    const titleFontFace = getFontFace(
        sizeStyle.titleFontFamilyRef,
        sizeStyle.titleFontStyle,
        sizeStyle.titleFontWeight,
        theme,
    );

    const subtitleFontFace = getFontFace(
        sizeStyle.subtitleFontFamilyRef,
        sizeStyle.subtitleFontStyle,
        sizeStyle.subtitleFontWeight,
        theme,
    );

    const contentRightTextFontFace = getFontFace(
        sizeStyle.contentRightTextFontFamilyRef,
        sizeStyle.contentRightTextFontStyle,
        sizeStyle.contentRightTextFontWeight,
        theme,
    );

    return StyleSheet.create({
        root: {
            color: viewStyle.color,
            backgroundColor: viewStyle.backgroundColor,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            gap: sizeStyle.gap,
            ...widthSize,
            ...externalStyle?.root,
        },
        contentLeft: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: alignToFlex[alignContentLeft],
            ...externalStyle?.contentLeft,
        },
        container: {
            display: 'flex',
            flexDirection: 'row',
            flex: stretching === 'auto' ? undefined : 1,
            alignItems: 'stretch',
            justifyContent: 'space-between',
            height: 'auto',
            gap: sizeStyle.gap,
            ...externalStyle?.container,
        },
        content: {
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            gap: sizeStyle.textBoxGap,
            ...externalStyle?.content,
        },
        label: {
            color: viewStyle.labelColor,
            ...labelFontFace,
            fontSize: sizeStyle.labelFontSize,
            letterSpacing: sizeStyle.labelLetterSpacing,
            lineHeight: sizeStyle.labelLineHeight,
            ...externalStyle?.label,
        },
        title: {
            color: viewStyle.titleColor,
            ...titleFontFace,
            fontSize: sizeStyle.titleFontSize,
            letterSpacing: sizeStyle.titleLetterSpacing,
            lineHeight: sizeStyle.titleLineHeight,
            ...externalStyle?.title,
        },
        subtitle: {
            color: viewStyle.subtitleColor,
            ...subtitleFontFace,
            fontSize: sizeStyle.subtitleFontSize,
            letterSpacing: sizeStyle.subtitleLetterSpacing,
            lineHeight: sizeStyle.subtitleLineHeight,
            ...externalStyle?.subtitle,
        },
        contentRight: {
            display: 'flex',
            flexDirection: 'row',
            gap: sizeStyle.contentRightTextGap,
            alignItems: alignToFlex[alignContentRight],
            ...contentRightTextFontFace,
            fontSize: sizeStyle.contentRightTextFontSize,
            letterSpacing: sizeStyle.contentRightTextLetterSpacing,
            lineHeight: sizeStyle.contentRightTextLineHeight,
            ...externalStyle?.contentRight,
        },
        contentRightText: {
            color: viewStyle.contentRightTextColor,
            height: sizeStyle.contentRightTextFontSize,
            ...contentRightTextFontFace,
            fontSize: sizeStyle.contentRightTextFontSize,
            letterSpacing: sizeStyle.contentRightTextLetterSpacing,
            lineHeight: sizeStyle.contentRightTextLineHeight,
            ...externalStyle?.contentRightText,
        },
    });
};
