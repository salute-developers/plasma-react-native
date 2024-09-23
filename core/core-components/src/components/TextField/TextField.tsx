import {
    Animated,
    GestureResponderEvent,
    NativeSyntheticEvent,
    Platform,
    Pressable,
    TargetedEvent,
    Text,
    TextInput,
    TextInputFocusEventData,
    TextStyle,
    View,
} from 'react-native';
import React, { useMemo, useRef, useState } from 'react';

import { Theme, withTheme } from '../ThemeProvider';
import { PropsType } from '../../types';
import { FocusableWrapper } from '../FocusableWrapper';

import { TextFieldConfig, TextFieldProps } from './TextField.types';
import { getStyle } from './TextField.styles';
import { useInnerLabelAnimation } from './hooks';
import { getPlaceHolderColor } from './hooks/utils';

export const textFieldCore = <T extends TextFieldConfig>(config?: T, theme?: Theme) => (
    props: TextFieldProps & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
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
        style: externalStyle,
        onPress,
        onBlur,
        onFocus,
        onValueChange,
        onChangeText,
        focusable,
        hasTVPreferredFocus,
        nextFocusDown,
        nextFocusForward,
        nextFocusLeft,
        nextFocusRight,
        nextFocusUp,
        ...rest
    } = props;

    const ref = useRef<TextInput>(null);

    const [focused, setFocused] = useState(false);
    // TODO: Можно ли обойтись одним состоянием
    const [focusedAfterInput, setFocusedAfterInput] = useState<undefined | boolean>(hasTVPreferredFocus);

    const viewStyle = focused ? config?.variations.focused.true : config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];
    const disabledOpacity = disabled ? config?.variations.disabled.true.disabledOpacity : 1;

    const navigationProps = {
        focusable,
        nextFocusDown,
        nextFocusForward,
        nextFocusLeft,
        nextFocusRight,
        nextFocusUp,
    };

    const [isFocused, inputWrapperStyleAnimate, labelStyleAnimate, onFocusInput, onBlurInput] = useInnerLabelAnimation(
        value,
        labelPlacement,
        readOnly,
        viewStyle,
        sizeStyle,
        theme,
    );

    const style = useMemo(
        () =>
            getStyle(
                theme,
                size,
                disabledOpacity,
                readOnly,
                labelPlacement,
                value,
                viewStyle,
                sizeStyle,
                externalStyle,
            ),
        [value, view, focused, size, disabled, focused, readOnly, labelPlacement, theme?.mode],
    );

    const hideLabel = size === 'xs' && labelPlacement === 'inner';
    const labelInside = size !== 'xs' && labelPlacement === 'inner';
    const additionalTextVisible =
        (labelPlacement === 'inner' && (isFocused || (!isFocused && value))) || labelPlacement === 'outer';
    const innerPlaceholderValue = hideLabel ? label : placeholder;
    const innerLabelValue = hideLabel ? undefined : label;
    const placeholderColor = getPlaceHolderColor(labelPlacement, size, readOnly, viewStyle);

    const tvStyles = Platform.isTV
        ? ({
              opacity: 0,
              position: 'absolute',
              lineHeight: Platform.isTV && Platform.OS === 'ios' ? 0 : undefined, // INFO: Чтобы инпут в модалке был посередине
          } as TextStyle)
        : undefined;

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

        setFocused(false);
        setFocusedAfterInput(false);
    };

    const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur?.(event);
        onBlurInput();

        setFocused(true);
        setFocusedAfterInput(true);
    };

    const onWrapperPress = (event: GestureResponderEvent) => {
        if (onPress) {
            onPress(event);
        }

        ref.current?.focus();
    };

    const onWrapperFocus = (event: NativeSyntheticEvent<TargetedEvent>) => {
        if (onFocus) {
            onFocus(event);
        }

        if (ref.current?.isFocused()) {
            return;
        }

        setFocused(true);
    };

    const onWrapperBlur = (event: NativeSyntheticEvent<TargetedEvent>) => {
        if (onBlur) {
            onBlur(event);
        }

        setFocused(false);
    };

    return (
        <View style={style.root}>
            {labelInside || (innerLabelValue && <Text style={style.label}>{innerLabelValue}</Text>)}
            <Pressable
                ref={externalRef}
                onPress={onWrapperPress}
                onFocus={onWrapperFocus}
                onBlur={onWrapperBlur}
                hasTVPreferredFocus={focusedAfterInput}
                {...navigationProps}
            >
                <Animated.View style={[style.inputWrapper, inputWrapperStyleAnimate]}>
                    {contentLeft && (
                        <View style={style.contentLeft}>
                            <FocusableWrapper iconColor={viewStyle?.contentLeftIconColor}>
                                {contentLeft}
                            </FocusableWrapper>
                        </View>
                    )}
                    <View style={style.inputLabelWrapper}>
                        {textBefore && additionalTextVisible && <Text style={style.textBefore}>{textBefore}</Text>}
                        <TextInput
                            {...rest}
                            style={[style.textInput, tvStyles]}
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
                        {Platform.isTV && (
                            <Text style={style.textInput}>
                                {value || <Text style={{ color: placeholderColor }}>{innerPlaceholderValue}</Text>}
                            </Text>
                        )}
                        {labelInside && (
                            <Animated.Text style={[style.label, labelStyleAnimate]}>{innerLabelValue}</Animated.Text>
                        )}
                        {textAfter && additionalTextVisible && <Text style={style.textAfter}>{textAfter}</Text>}
                    </View>
                    {contentRight && (
                        <View style={style.contentRight}>
                            <FocusableWrapper iconColor={viewStyle?.contentRightIconColor}>
                                {contentRight}
                            </FocusableWrapper>
                        </View>
                    )}
                </Animated.View>
            </Pressable>
            {captionLeft && <Text style={style.captionLeft}>{captionLeft}</Text>}
        </View>
    );
};

export const textFieldComponent = withTheme(textFieldCore);
