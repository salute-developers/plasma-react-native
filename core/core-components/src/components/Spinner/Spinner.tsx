import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import { PropsType } from '../../types';
import { withTheme } from '../ThemeProvider';

import { SpinnerSvg } from './SpinnerSvg';
import { SpinnerConfig, SpinnerProps } from './Spinner.types';

export const spinnerCore = <T extends SpinnerConfig>(config?: T) => (
    props: SpinnerProps & PropsType<T['variations']>,
) => {
    const { view = '', size = '', color = 'white', height = 56, width = 56 } = props;

    const rotateValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ).start();
    }, [rotateValue]);

    const viewStyle = config?.variations.view[view];
    const sizeStyle = config?.variations.size[size];

    const spinnerHeight = sizeStyle?.size || height;
    const spinnerWidth = sizeStyle?.size || width;

    return (
        <Animated.View
            style={{
                width: spinnerWidth,
                height: spinnerHeight,
                transform: [
                    {
                        rotate: rotateValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg'],
                        }),
                    },
                ],
            }}
        >
            <SpinnerSvg color={viewStyle?.color || color} width={spinnerWidth} height={spinnerHeight} />
        </Animated.View>
    );
};

export const spinnerComponent = withTheme(spinnerCore);
