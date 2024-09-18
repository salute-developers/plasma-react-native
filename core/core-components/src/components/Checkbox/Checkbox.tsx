import { GestureResponderEvent, NativeSyntheticEvent, Platform, TargetedEvent, Text, View } from 'react-native';
import { useMemo, useState } from 'react';

import { Theme, withTheme } from '../ThemeProvider';
import { PropsType } from '../../types';
import { FocusableWrapper } from '../FocusableWrapper';

import { CheckboxConfig, CheckboxProps } from './Checkbox.types';
import { getStyle } from './Checkbox.styles';
import { Done, Indeterminate } from './IconsSvg';

export const checkboxCore = <T extends CheckboxConfig>(config?: T, theme?: Theme) => (
    props: CheckboxProps & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
) => {
    const {
        view = '',
        size = '',
        label,
        description,
        indeterminate,
        singleLine = false,
        disabled,
        checked = false,
        style: externalStyle,
        onValueChange,
        onPress,
        onBlur,
        onFocus,
        //
        focusable,
        hasTVPreferredFocus,
        nextFocusDown,
        nextFocusForward,
        nextFocusLeft,
        nextFocusRight,
        nextFocusUp,
        ...rest
    } = props;

    const [focused, setFocused] = useState(false);

    const viewStyle = config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];
    const disabledOpacity = disabled ? config?.variations.disabled.true.disabledOpacity : 1;

    const hasContent = label || description;
    const onlyDescription = Boolean(!label && description);
    const iconColor = checked || indeterminate ? viewStyle?.iconColor : 'transparent';
    const numberOfLines = singleLine ? 1 : undefined;

    const style = useMemo(
        () =>
            getStyle(
                theme,
                disabledOpacity,
                onlyDescription,
                checked || indeterminate,
                viewStyle,
                sizeStyle,
                externalStyle,
            ),
        [view, size, label, checked, indeterminate, description, disabled, theme?.mode],
    );

    const navigationProps = {
        focusable,
        hasTVPreferredFocus,
        nextFocusDown,
        nextFocusForward,
        nextFocusLeft,
        nextFocusRight,
        nextFocusUp,
    };

    const onWrapperPress = (event: GestureResponderEvent) => {
        if (onValueChange) {
            onValueChange(checked);
        }

        if (onPress) {
            onPress(event);
        }
    };

    const onWrapperFocus = (event: NativeSyntheticEvent<TargetedEvent>) => {
        if (onFocus) {
            onFocus(event);
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
        <FocusableWrapper
            style={{
                root: style.root,
                focus: {
                    borderColor: theme?.data.color[theme?.mode].textPrimary,
                    borderRadius: sizeStyle?.triggerBorderRadius,
                    borderWidth: 2,
                },
            }}
            hasFocus={Platform.isTV}
            focused={focused}
            disabled={disabled}
            ref={externalRef}
            onFocus={onWrapperFocus}
            onBlur={onWrapperBlur}
            onPress={onWrapperPress}
            {...navigationProps}
            {...rest}
        >
            <View style={style.wrapper}>
                <View style={style.trigger}>
                    {indeterminate ? (
                        <Indeterminate color={iconColor} size={sizeStyle?.triggerSize} />
                    ) : (
                        <Done color={iconColor} size={sizeStyle?.triggerSize} />
                    )}
                </View>
                {hasContent && (
                    <View style={style.content}>
                        {label && (
                            <Text numberOfLines={numberOfLines} style={style.label}>
                                {label}
                            </Text>
                        )}
                        {description && (
                            <Text numberOfLines={numberOfLines} style={style.description}>
                                {description}
                            </Text>
                        )}
                    </View>
                )}
            </View>
        </FocusableWrapper>
    );
};

export const checkboxComponent = withTheme(checkboxCore);
