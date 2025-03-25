import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { RadialGradient } from 'react-native-svg';

import { roundNumberToDecimal } from '../../../utils';
import { CardConfig } from '../Card.types';

const LENGTH_COEFFICIENT = 0.25;

const ANIMATE_BASE_DURATION = 800;

const ANIMATE_UPDATE_MS = 16;

export const useBorderAnimate = (
    customStyles: CardConfig['variations']['size'][string] & CardConfig['variations']['view'][string],
    focused?: boolean,
) => {
    const min = Math.min(customStyles.width, customStyles.height);
    const durationForWidth = ANIMATE_BASE_DURATION * roundNumberToDecimal(customStyles.width / min);
    const durationForHeight = ANIMATE_BASE_DURATION * roundNumberToDecimal(customStyles.height / min);

    const animatePoints = [
        { cx: 10, cy: 90, duration: durationForWidth },
        { cx: 10, cy: 10, duration: durationForHeight },
        { cx: 90, cy: 10, duration: durationForWidth },
        { cx: 90, cy: 90, duration: durationForHeight },
    ];

    const cxAnim = useRef(new Animated.Value(animatePoints[3].cx)).current;
    const cyAnim = useRef(new Animated.Value(animatePoints[3].cy)).current;
    const gradientRef = useRef<RadialGradient | null>(null);

    const gradientRadius = (customStyles.width + customStyles.height) * LENGTH_COEFFICIENT;

    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence(
                    animatePoints.map(({ cx, duration }) =>
                        Animated.timing(cxAnim, {
                            toValue: cx,
                            duration,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }),
                    ),
                ),
                Animated.sequence(
                    animatePoints.map(({ cy, duration }) =>
                        Animated.timing(cyAnim, {
                            toValue: cy,
                            duration,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }),
                    ),
                ),
            ]),
        ).start();

        const interval = setInterval(() => {
            gradientRef.current?.setNativeProps({
                // eslint-disable-next-line no-underscore-dangle
                cx: `${(cxAnim as any).__getValue()}%`,
                // eslint-disable-next-line no-underscore-dangle
                cy: `${(cyAnim as any).__getValue()}%`,
            });
        }, ANIMATE_UPDATE_MS);

        return () => clearInterval(interval);
    }, [focused]);

    return [gradientRef, gradientRadius] as const;
};
