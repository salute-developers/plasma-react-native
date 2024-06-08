import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../ThemeProvider';
import { getFontFace } from '../../utils';

import { CheckboxConfig } from './Checkbox.types';

export interface Style {
    root?: ViewStyle;
    wrapper?: ViewStyle;
    trigger?: ViewStyle;
    content?: ViewStyle;
    label?: TextStyle;
    description?: TextStyle;
}

export const getStyle = (
    theme?: Theme,
    disabledOpacity?: number,
    onlyDescription?: boolean,
    checked?: boolean,
    viewStyle?: CheckboxConfig['variations']['view'][string],
    sizeStyle?: CheckboxConfig['variations']['size'][string],
    externalStyle?: Style,
): Style => {
    if (!viewStyle || !sizeStyle || !theme) {
        return {
            root: {},
            wrapper: {},
            trigger: {},
            content: {},
            label: {},
            description: {},
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
            margin: sizeStyle.margin,
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            ...externalStyle?.root,
        },
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            ...externalStyle?.wrapper,
        },
        trigger: {
            margin: sizeStyle.triggerMargin,
            width: sizeStyle.triggerSize,
            height: sizeStyle.triggerSize,
            borderRadius: sizeStyle.triggerBorderRadius,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            flexGrow: 0,
            flexDirection: 'row',
            backgroundColor: checked ? viewStyle.fillColor : 'transparent',
            borderColor: checked ? 'transparent' : viewStyle.triggerBorderColor,
            borderWidth: sizeStyle.triggerBorderWidth,
            borderStyle: 'solid',
            // TODO: Реализовать анимацию на scale
            ...externalStyle?.trigger,
        },
        content: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            marginTop: sizeStyle.contentTopOffset,
            marginLeft: sizeStyle.contentLeftOffset,
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
        description: {
            marginTop: onlyDescription ? 0 : sizeStyle.descriptionMarginTop,
            color: viewStyle.descriptionColor,
            ...descriptionFontFace,
            fontSize: sizeStyle.descriptionFontSize,
            letterSpacing: sizeStyle.descriptionLetterSpacing,
            lineHeight: sizeStyle.descriptionLineHeight,
            ...externalStyle?.description,
        },
    });
};
