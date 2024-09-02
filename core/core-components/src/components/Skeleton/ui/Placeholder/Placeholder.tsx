import { Animated, Dimensions, Easing, View } from 'react-native';
import { Defs, Rect, Svg } from 'react-native-svg';
import { forwardRef, useEffect, useMemo, useRef } from 'react';

import { LinearGradient } from '../LinearGradient';

import { getStyle } from './Placeholder.styles';
import { PlaceholderInternalProps, PlaceholderProps } from './Placeholder.types';

/**
 * Компонент для создания плейсхолдера.
 */
export const Placeholder = forwardRef<View, PlaceholderProps & PlaceholderInternalProps>((props, externalRef) => {
    const {
        lighter,
        width,
        height,
        roundness = 16,
        margin,
        customGradientColor,
        theme,
        style: externalStyle,
        ...rest
    } = props;

    const placeholderTokenName = lighter ? 'surfaceSkeletonDeepGradient' : 'surfaceSkeletonGradient';
    const gradientToken = customGradientColor || theme?.data.gradient[theme.mode][placeholderTokenName]?.[0];
    const windowWidth = Dimensions.get('window').width * 2;

    const style = useMemo(() => getStyle(theme, width, windowWidth, height, margin, roundness, externalStyle), [
        lighter,
        width,
        windowWidth,
        height,
        roundness,
        margin,
        customGradientColor,
        theme,
        theme?.mode,
    ]);

    const translateValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(translateValue, {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ).start();
    }, [translateValue]);

    return (
        <View ref={externalRef} style={style.root} {...rest}>
            <Animated.View
                style={[
                    style.placeholder,
                    {
                        left: -(windowWidth / 2),
                        transform: [
                            {
                                translateX: translateValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, windowWidth / 2],
                                }),
                            },
                        ],
                    },
                ]}
            >
                <Svg>
                    <Defs>
                        <LinearGradient id="grad_0" data={gradientToken} />
                    </Defs>
                    <Rect width={windowWidth} height={height} fill="url(#grad_0)" />
                </Svg>
            </Animated.View>
        </View>
    );
});
