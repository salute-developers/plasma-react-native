import { Animated, GestureResponderEvent, Pressable, Text, View } from 'react-native';
import { useMemo } from 'react';

import { Theme, withTheme } from '../ThemeProvider';
import { PropsType } from '../../types';

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
        focused,
        onPress,
        onValueChange,
        ...rest
    } = props;

    const viewStyle = focused ? config?.variations.focused.true : config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];
    const disabledOpacity = disabled ? config?.variations.disabled.true.disabledOpacity : 1;

    const [trackStyleAnimate, triggerStyleAnimate, onPressIn, onPressOut] = useToggleAnimation(
        checked,
        viewStyle,
        sizeStyle,
    );

    const style = useMemo(() => getStyle(theme, disabledOpacity, viewStyle, sizeStyle, externalStyle), [
        view,
        size,
        label,
        focused,
        disabled,
        theme?.mode,
    ]);

    const onWrapperPress = (event: GestureResponderEvent) => {
        if (onPress) {
            onPress(event);
        }

        if (onValueChange) {
            onValueChange(checked);
        }
    };

    return (
        <Pressable
            style={style.root}
            disabled={disabled}
            ref={externalRef}
            onPress={onWrapperPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
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
        </Pressable>
    );
};

export const switchComponent = withTheme(switchCore);
