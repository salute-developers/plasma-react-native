import {
    Animated,
    NativeSyntheticEvent,
    Pressable,
    Text,
    TextInput,
    TextInputFocusEventData,
    View,
} from 'react-native';
import { useMemo, useRef } from 'react';

import { Theme, withTheme } from '../ThemeProvider';
import { PropsType } from '../../types';

import { TextFieldConfig, TextFieldProps } from './TextField.types';
import { getStyle } from './TextField.styles';
import { useInnerLabelAnimation } from './hooks';
import { getPlaceHolderColor } from './hooks/utils';

export const textFieldCore = <T extends TextFieldConfig>(config?: T, theme?: Theme) => (
    props: TextFieldProps & PropsType<T['variations']>,
) => {
    const {
        view = '',
        size = '',
        contentLeft,
        contentRight,
        value,
        label,
        labelPlacement,
        captionLeft,
        textBefore,
        textAfter,
        placeholder,
        readOnly = false,
        disabled = false,
        maxLength,
        // focused, TODO: Придумать общую реализацию фокусной рамки,
        style: externalStyle,
        onValueChange,
        onChangeText,
        onBlur,
        onFocus,
        ...rest
    } = props;
    const ref = useRef<TextInput>(null);

    const viewStyle = config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];
    const disabledOpacity = disabled ? config?.variations.disabled.true.disabledOpacity : 1;

    const [isFocused, inputWrapperStyleAnimate, labelStyleAnimate, onFocusInput, onBlurInput] = useInnerLabelAnimation(
        value,
        labelPlacement,
        readOnly,
        viewStyle,
        sizeStyle,
        theme,
    );

    const style = useMemo(
        () => getStyle(theme, size, disabledOpacity, readOnly, labelPlacement, viewStyle, sizeStyle, externalStyle),
        [view, size, disabled, readOnly, labelPlacement, theme?.mode],
    );

    const hideLabel = size === 'xs' && labelPlacement === 'inner';
    const labelInside = size !== 'xs' && labelPlacement === 'inner';
    const additionalTextVisible =
        (labelPlacement === 'inner' && (isFocused || (!isFocused && value))) || labelPlacement === 'outer';
    const innerPlaceholderValue = hideLabel ? label : placeholder;
    const innerLabelValue = hideLabel ? undefined : label;
    const placeholderColor = getPlaceHolderColor(labelPlacement, size, readOnly, viewStyle);

    const onChange = (newValue: string) => {
        if (disabled || readOnly) {
            return;
        }

        if (maxLength && maxLength < newValue.length) {
            return;
        }

        onChangeText?.(newValue);
        onValueChange?.(newValue);
    };

    const handleFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onFocus?.(event);
        onFocusInput();
    };

    const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur?.(event);
        onBlurInput();
    };

    const onRootFocus = () => {
        ref.current?.focus();
    };

    return (
        <Pressable onPress={onRootFocus}>
            <View style={style.root}>
                {labelInside || (innerLabelValue && <Text style={style.label}>{innerLabelValue}</Text>)}
                <Animated.View style={[style.inputWrapper, inputWrapperStyleAnimate]}>
                    {contentLeft && <View style={style.contentLeft}>{contentLeft}</View>}
                    <View style={style.inputLabelWrapper}>
                        {textBefore && additionalTextVisible && <Text style={style.textBefore}>{textBefore}</Text>}
                        <TextInput
                            {...rest}
                            style={style.textInput}
                            placeholder={innerPlaceholderValue}
                            selectionColor={viewStyle?.caretColor}
                            placeholderTextColor={placeholderColor}
                            numberOfLines={1}
                            ref={ref}
                            value={value}
                            readOnly={readOnly || disabled}
                            onChangeText={onChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        {labelInside && (
                            <Animated.Text style={[style.label, labelStyleAnimate]}>{innerLabelValue}</Animated.Text>
                        )}
                        {textAfter && additionalTextVisible && <Text style={style.textAfter}>{textAfter}</Text>}
                    </View>
                    {contentRight && <View style={style.contentRight}>{contentRight}</View>}
                </Animated.View>
                {captionLeft && <Text style={style.captionLeft}>{captionLeft}</Text>}
            </View>
        </Pressable>
    );
};

export const textFieldComponent = withTheme(textFieldCore);
