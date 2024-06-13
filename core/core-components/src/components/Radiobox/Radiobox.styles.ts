import { StyleSheet } from 'react-native';

import { Theme } from '../ThemeProvider';
import { Style, getStyle as getCheckboxStyle } from '../Checkbox/Checkbox.styles';

import { RadioboxConfig } from './Radiobox.types';

export const getStyle = (
    theme?: Theme,
    disabledOpacity?: number,
    onlyDescription?: boolean,
    checked?: boolean,
    viewStyle?: RadioboxConfig['variations']['view'][string],
    sizeStyle?: RadioboxConfig['variations']['size'][string],
    externalStyle?: Style,
): Style => {
    const style = getCheckboxStyle(
        theme,
        disabledOpacity,
        onlyDescription,
        checked,
        viewStyle,
        sizeStyle,
        externalStyle,
    );

    return StyleSheet.create({
        ...style,
        trigger: {
            ...style.trigger,
            borderColor: checked ? viewStyle?.fillColor : viewStyle?.triggerBorderColor,
            backgroundColor: checked ? viewStyle?.iconColor : 'transparent',
            borderWidth: checked ? sizeStyle?.triggerEllipseBorderWidth : sizeStyle?.triggerBorderWidth,
            borderRadius: sizeStyle?.triggerBorderRadius,
            ...externalStyle?.trigger,
        },
    });
};
