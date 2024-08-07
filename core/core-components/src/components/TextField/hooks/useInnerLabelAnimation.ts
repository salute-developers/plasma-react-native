import { Animated, Easing, TextStyle } from 'react-native';
import { useRef, useState } from 'react';

import { getFontFace } from '../../../utils';
import { Theme } from '../../ThemeProvider';
import { LabelPlacement, TextFieldConfig } from '../TextField.types';

export const useInnerLabelAnimation = (
    value?: string,
    labelPlacement?: LabelPlacement,
    readOnly?: boolean,
    viewStyle?: TextFieldConfig['variations']['view'][string],
    sizeStyle?: TextFieldConfig['variations']['size'][string],
    theme?: Theme,
) => {
    const [isFocused, setIsFocused] = useState(false);
    const [labelFocusedStyle, setLabelFocusedStyle] = useState({});

    const positionValue = useRef(new Animated.Value(labelPlacement === 'inner' && value ? 1 : 0)).current;
    const fontSizeValue = useRef(new Animated.Value(labelPlacement === 'inner' && value ? 1 : 0)).current;
    const backgroundColorValue = useRef(new Animated.Value(0)).current;

    const animatedSetting = {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
    };

    const onFocusInput = () => {
        if (labelPlacement === 'inner' && sizeStyle && theme) {
            const labelInnerFontFace = getFontFace(
                sizeStyle.labelInnerFontFamilyRef,
                sizeStyle.labelInnerFontStyle,
                sizeStyle.labelInnerFontWeight,
                theme,
            );

            setLabelFocusedStyle({
                ...labelInnerFontFace,
                letterSpacing: sizeStyle.labelInnerLetterSpacing,
                lineHeight: sizeStyle.labelInnerLineHeight,
            });

            Animated.parallel([
                Animated.timing(positionValue, {
                    toValue: 1,
                    ...animatedSetting,
                }),
                Animated.timing(fontSizeValue, {
                    toValue: 1,
                    ...animatedSetting,
                }),
                Animated.timing(backgroundColorValue, {
                    toValue: 1,
                    ...animatedSetting,
                }),
            ]).start();
        }

        setIsFocused(true);
    };

    const onBlurInput = () => {
        if (labelPlacement === 'inner' && sizeStyle && theme && !value) {
            const labelFontFace = getFontFace(
                sizeStyle.labelFontFamilyRef,
                sizeStyle.labelFontStyle,
                sizeStyle.labelFontWeight,
                theme,
            );

            setLabelFocusedStyle({
                ...labelFontFace,
                letterSpacing: sizeStyle.labelLetterSpacing,
                lineHeight: sizeStyle.labelLineHeight,
            });

            Animated.parallel([
                Animated.timing(positionValue, {
                    toValue: 0,
                    ...animatedSetting,
                }),
                Animated.timing(fontSizeValue, {
                    toValue: 0,
                    ...animatedSetting,
                }),
            ]).start();
        }

        if (labelPlacement === 'inner') {
            Animated.timing(backgroundColorValue, {
                toValue: 0,
                ...animatedSetting,
            }).start();
        }

        setIsFocused(false);
    };

    const backgroundColor = readOnly ? viewStyle?.backgroundColorReadOnly || '' : viewStyle?.backgroundColor || '';
    const backgroundColorFocused = viewStyle?.backgroundColorFocus || '';
    const labelFontSize = sizeStyle?.labelFontSize || 0;
    const labelInnerFontSize = sizeStyle?.labelInnerFontSize || 0;
    const positionFrom = ((sizeStyle?.height || 0) - (sizeStyle?.labelLineHeight || 0)) / 2;
    const positionTo = sizeStyle?.labelInnerTop || 0;

    const inputWrapperStyleAnimate = {
        backgroundColor: backgroundColorValue.interpolate({
            inputRange: [0, 1],
            outputRange: [backgroundColor, backgroundColorFocused],
        }),
    };

    const labelStyleAnimate = [
        labelFocusedStyle,
        {
            fontSize: fontSizeValue.interpolate({
                inputRange: [0, 1],
                outputRange: [labelFontSize, labelInnerFontSize],
            }),
            top: positionValue.interpolate({
                inputRange: [0, 1],
                outputRange: [positionFrom, positionTo],
            }),
        },
    ] as TextStyle;

    return [isFocused, inputWrapperStyleAnimate, labelStyleAnimate, onFocusInput, onBlurInput] as const;
};
