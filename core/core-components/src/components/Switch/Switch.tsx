import {
    Animated,
    GestureResponderEvent,
    NativeSyntheticEvent,
    Platform,
    TargetedEvent,
    Text,
    View,
} from 'react-native';
import { useMemo, useState } from 'react';

import { Theme, withTheme } from '../ThemeProvider';
import { PropsType } from '../../types';
import { FocusableWrapper } from '../FocusableWrapper';

import { SwitchConfig, SwitchProps } from './Switch.types';
import { getStyle } from './Switch.styles';
import { useToggleAnimation } from './hooks';

export const switchCore = <T extends SwitchConfig>(config?: T, theme?: Theme) => (
    props: SwitchProps & PropsType<T['variations']>,
    externalRef: React.ForwardedRef<View>,
) => {
    const {
        view = '',
        size = '',
        label,
        description,
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

    const [trackStyleAnimate, triggerStyleAnimate, onPressIn, onPressOut, onShortPress] = useToggleAnimation(
        checked,
        viewStyle,
        sizeStyle,
    );

    const style = useMemo(() => getStyle(theme, disabledOpacity, viewStyle, sizeStyle, externalStyle), [
        view,
        size,
        label,
        disabled,
        theme?.mode,
    ]);

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

        onShortPress();
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
                    borderRadius: sizeStyle?.trackBorderRadius,
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
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            {...navigationProps}
            {...rest}
        >
            <View style={style.wrapper}>
                {label && (
                    <Text style={style.label} numberOfLines={1}>
                        {label}
                    </Text>
                )}
                <Animated.View style={[style.track, trackStyleAnimate]}>
                    <Animated.View style={[style.thumb, triggerStyleAnimate]} />
                </Animated.View>
            </View>
            {description && (
                <Text style={style.description} numberOfLines={1}>
                    {description}
                </Text>
            )}
        </FocusableWrapper>
    );
};

export const switchComponent = withTheme(switchCore);
