import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../ThemeProvider';
import { getFontFace } from '../../utils';

import { LabelPlacement, TextFieldConfig } from './TextField.types';
import { getStyleForDynamicLabel } from './hooks/utils';

export interface Style {
    root?: ViewStyle;
    label?: TextStyle;
    inputWrapper?: ViewStyle;
    contentLeft?: ViewStyle;
    inputLabelWrapper?: ViewStyle;
    textInput?: TextStyle;
    textBefore?: TextStyle;
    textAfter?: TextStyle;
    contentRight?: ViewStyle;
    captionLeft?: TextStyle;
}

// TODO: добавить стили для border дизайна
export const getStyle = (
    theme?: Theme,
    size?: string,
    disabledOpacity?: number,
    readOnly?: boolean,
    labelPlacement?: LabelPlacement,
    value?: string,
    viewStyle?: TextFieldConfig['variations']['view'][string],
    sizeStyle?: TextFieldConfig['variations']['size'][string],
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle || !theme) {
        return {
            root: {},
            label: {},
            inputWrapper: {},
            contentLeft: {},
            inputLabelWrapper: {},
            textInput: {},
            textBefore: {},
            textAfter: {},
            contentRight: {},
            captionLeft: {},
        };
    }

    const captionLeftFontFace = getFontFace(
        sizeStyle.captionLeftFontFamilyRef,
        sizeStyle.captionLeftFontStyle,
        sizeStyle.captionLeftFontWeight,
        theme,
    );

    const fontFace = getFontFace(sizeStyle.fontFamilyRef, sizeStyle.fontStyle, sizeStyle.fontWeight, theme);

    const labelStyles = getStyleForDynamicLabel(theme, viewStyle, sizeStyle, labelPlacement, readOnly, value);

    return StyleSheet.create({
        root: {
            opacity: disabledOpacity,
            ...externalStyle?.root,
        },
        label: {
            ...labelStyles.label,
            ...externalStyle?.label,
        },
        inputWrapper: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            height: sizeStyle.height,
            borderRadius: sizeStyle.borderRadius,
            paddingRight: sizeStyle.paddingRight,
            paddingLeft: sizeStyle.paddingLeft,
            color: readOnly ? viewStyle.colorReadOnly : viewStyle.color,
            backgroundColor: readOnly ? viewStyle.backgroundColorReadOnly : viewStyle.backgroundColor,
            ...externalStyle?.inputWrapper,
        },
        contentLeft: {
            marginTop: sizeStyle.contentLeftMarginTop,
            marginRight: sizeStyle.contentLeftMarginRight,
            marginBottom: sizeStyle.contentLeftMarginBottom,
            marginLeft: sizeStyle.contentLeftMarginLeft,
            flexDirection: 'row',
            alignItems: 'center',
            ...externalStyle?.contentLeft,
        },
        inputLabelWrapper: {
            flex: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            ...externalStyle?.inputLabelWrapper,
        },
        textInput: {
            color: readOnly ? viewStyle.colorReadOnly : viewStyle.color,
            ...labelStyles.text,
            backgroundColor: 'transparent',
            flex: 1,
            ...fontFace,
            fontSize: sizeStyle.fontSize,
            letterSpacing: sizeStyle.letterSpacing,
            // INFO: Есть проблема с рендером некоторых шрифтов в компоненте `TextInput`
            // при определенных условиях https://github.com/facebook/react-native/issues/29507
            lineHeight: size === 'xs' && Platform.OS === 'ios' ? 0 : sizeStyle.lineHeight,
            ...externalStyle?.textInput,
        },
        textBefore: {
            marginRight: sizeStyle.textBeforeMargin,
            color: viewStyle?.textBeforeColor,
            ...labelStyles.text,
            ...fontFace,
            fontSize: sizeStyle.fontSize,
            letterSpacing: sizeStyle.letterSpacing,
            lineHeight: sizeStyle.lineHeight,
            ...externalStyle?.textBefore,
        },
        textAfter: {
            marginLeft: sizeStyle.textAfterMargin,
            color: viewStyle?.textAfterColor,
            ...labelStyles.text,
            ...fontFace,
            fontSize: sizeStyle.fontSize,
            letterSpacing: sizeStyle.letterSpacing,
            lineHeight: sizeStyle.lineHeight,
            ...externalStyle?.textAfter,
        },
        contentRight: {
            marginTop: sizeStyle.contentRightMarginTop,
            marginRight: sizeStyle.contentRightMarginRight,
            marginBottom: sizeStyle.contentRightMarginBottom,
            marginLeft: sizeStyle.contentRightMarginLeft,
            flexDirection: 'row',
            alignItems: 'center',
            ...externalStyle?.contentRight,
        },
        captionLeft: {
            marginTop: sizeStyle.captionLeftOffset,
            color: readOnly ? viewStyle.captionLeftColorReadOnly : viewStyle?.captionLeftColor,
            ...captionLeftFontFace,
            fontSize: sizeStyle.captionLeftFontSize,
            letterSpacing: sizeStyle.captionLeftLetterSpacing,
            lineHeight: sizeStyle.captionLeftLineHeight,
            ...externalStyle?.captionLeft,
        },
    });
};
