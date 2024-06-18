import { TextStyle, ViewStyle } from 'react-native';

import { LabelPlacement, TextFieldConfig } from '../../TextField.types';

export const getStyleForDynamicLabel = (
    viewStyle: TextFieldConfig['variations']['view'][string],
    sizeStyle: TextFieldConfig['variations']['size'][string],
    labelPlacement?: LabelPlacement,
    readOnly?: boolean,
) => {
    if (labelPlacement === 'inner') {
        return {
            label: {
                marginBottom: 0,
                color: readOnly ? viewStyle.placeholderColorReadOnly : viewStyle.placeholderColor,
                position: 'absolute',
                top: (sizeStyle.height - sizeStyle.labelLineHeight) / 2,
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
        } as ViewStyle,
        text: {
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
        } as TextStyle,
    };
};
