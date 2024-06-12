import { Platform, Animated, Easing, ViewStyle } from 'react-native';
import { useRef, useState } from 'react';

import { SwitchConfig } from '../Switch.types';

export const useToggleAnimation = (
    checked: boolean,
    viewStyle?: SwitchConfig['variations']['view'][string],
    sizeStyle?: SwitchConfig['variations']['size'][string],
) => {
    const [rightPosition, setRightPosition] = useState(checked ? 0 : 'auto');
    const [leftPosition, setLeftPosition] = useState(checked ? 'auto' : 0);

    const backgroundColorValue = useRef(new Animated.Value(checked ? 1 : 0)).current;
    const positionValue = useRef(new Animated.Value(checked ? 1 : 0)).current;
    const widthValue = useRef(new Animated.Value(0)).current;

    const animatedSetting = {
        duration: 150,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
    };

    const onPressIn = () => {
        Animated.timing(widthValue, {
            toValue: 1,
            ...animatedSetting,
        }).start();
    };

    const onPressOut = () => {
        Animated.timing(widthValue, {
            toValue: 0,
            ...animatedSetting,
        }).start();
    };

    const onShortPress = () => {
        Animated.parallel([
            Animated.timing(backgroundColorValue, {
                toValue: checked ? 0 : 1,
                ...animatedSetting,
            }),
            Animated.timing(positionValue, {
                toValue: checked ? 0 : 1,
                ...animatedSetting,
            }),
        ]).start(() => {
            setRightPosition(checked ? 'auto' : 0);
            setLeftPosition(checked ? 0 : 'auto');
        });
    };

    const trackBackgroundColorOn = viewStyle?.trackBackgroundColorOn || '';
    const trackBackgroundColorOff = viewStyle?.trackBackgroundColorOff || '';
    const thumbSize = sizeStyle?.thumbSize || 0;
    const scaledThumbSize = thumbSize * (sizeStyle?.thumbPressScale || 0);
    const thumbPosition = (sizeStyle?.trackWidth || 0) - (sizeStyle?.thumbOffset || 0) * 2 - thumbSize;

    const trackStyleAnimate = {
        backgroundColor: backgroundColorValue.interpolate({
            inputRange: [0, 1],
            outputRange: [trackBackgroundColorOff, trackBackgroundColorOn],
        }),
    };

    const triggerStyleAnimate = {
        width:
            Platform.OS === 'android'
                ? thumbSize
                : widthValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [thumbSize, scaledThumbSize],
                  }),
        left:
            leftPosition === 'auto' && Platform.OS !== 'android'
                ? leftPosition
                : positionValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, thumbPosition],
                  }),
        right:
            rightPosition === 'auto'
                ? rightPosition
                : positionValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [thumbPosition, 0],
                  }),
    } as ViewStyle;

    return [trackStyleAnimate, triggerStyleAnimate, onPressIn, onPressOut, onShortPress] as const;
};
