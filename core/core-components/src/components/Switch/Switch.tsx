import { Animated, Pressable, Text, View } from 'react-native';
import { useMemo } from 'react';

import { Theme, withTheme } from '../ThemeProvider';
import { PropsType } from '../../types';

import { SwitchConfig, SwitchProps } from './Switch.types';
import { getStyle } from './Switch.styles';
import { useToggleAnimation } from './hooks';

export const switchCore = <T extends SwitchConfig>(config?: T, theme?: Theme) => (
    props: SwitchProps & PropsType<T['variations']>,
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
        // focused, TODO: Придумать общую реализацию фокусной рамки
        ...rest
    } = props;

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

    const onPress = () => {
        if (onValueChange) {
            onValueChange(checked);
        }
        onShortPress();
    };

    return (
        <Pressable
            style={style.root}
            disabled={disabled}
            onPress={onPress}
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
