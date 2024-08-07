import { TextStyle, ViewStyle } from 'react-native';

import { LabelPlacement, TextFieldConfig } from '../../TextField.types';
import { getFontFace } from '../../../../utils';
import { Theme } from '../../../ThemeProvider';

export const getStyleForDynamicLabel = (
    theme: Theme,
    viewStyle: TextFieldConfig['variations']['view'][string],
    sizeStyle: TextFieldConfig['variations']['size'][string],
    labelPlacement?: LabelPlacement,
    readOnly?: boolean,
    value?: string,
) => {
    const labelFontFace = getFontFace(
        sizeStyle.labelFontFamilyRef,
        sizeStyle.labelFontStyle,
        sizeStyle.labelFontWeight,
        theme,
    );

    if (labelPlacement === 'inner') {
        const labelInnerFontFace = getFontFace(
            sizeStyle.labelInnerFontFamilyRef,
            sizeStyle.labelInnerFontStyle,
            sizeStyle.labelInnerFontWeight,
            theme,
        );

        return {
            label: {
                marginBottom: 0,
                color: readOnly ? viewStyle.placeholderColorReadOnly : viewStyle.placeholderColor,
                position: 'absolute',
                ...(value ? labelInnerFontFace : labelFontFace),
                fontSize: value ? sizeStyle.labelInnerFontSize : sizeStyle.labelFontSize,
                letterSpacing: value ? sizeStyle.labelInnerLetterSpacing : sizeStyle.labelLetterSpacing,
                lineHeight: value ? sizeStyle.labelInnerLineHeight : sizeStyle.labelLineHeight,
            } as ViewStyle,
            text: {
                paddingTop: sizeStyle.contentLabelInnerPaddingTop,
                paddingRight: sizeStyle.contentLabelInnerPaddingRight,
                paddingBottom: sizeStyle.contentLabelInnerPaddingBottom,
                paddingLeft: sizeStyle.contentLabelInnerPaddingLeft,
            } as TextStyle,
        };
    }

    return {
        label: {
            marginBottom: sizeStyle.labelOffset,
            color: readOnly ? viewStyle.labelColorReadOnly : viewStyle.labelColor,
            position: 'relative',
            top: 'auto',
            ...labelFontFace,
            fontSize: sizeStyle.labelFontSize,
            letterSpacing: sizeStyle.labelLetterSpacing,
            lineHeight: sizeStyle.labelLineHeight,
        } as TextStyle,
        text: {
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
        } as TextStyle,
    };
};
