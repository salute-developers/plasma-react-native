import { Defs, RadialGradient, Stop, Svg, Rect } from 'react-native-svg';

import { CardConfig } from './Card.types';
import { getScaleOffset } from './utils';

interface CardRadialGradientSvgProps {
    styles: CardConfig['variations']['size'][string] & CardConfig['variations']['view'][string];
    gradientRadius: number;
    gradientRef: React.MutableRefObject<RadialGradient | null>;
}

export const CardRadialGradientSvg = (props: CardRadialGradientSvgProps) => {
    const { styles, gradientRadius, gradientRef } = props;
    const { width, height, scale, borderWidth, borderRadius } = styles;

    return (
        <Svg
            width={Math.floor(width * scale) + borderWidth * 2}
            height={Math.floor(height * scale) + borderWidth * 2}
            style={{
                position: 'absolute',
                left: -getScaleOffset(width, scale) - borderWidth,
                top: -getScaleOffset(height, scale) - borderWidth,
            }}
        >
            <Rect
                width="100%"
                height="100%"
                fill="url(#grad)"
                rx={borderRadius + borderWidth}
                ry={borderRadius + borderWidth}
            />
            <Defs>
                <RadialGradient id="grad" r={gradientRadius} ref={gradientRef} gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#FFFFFF" offset="0%" />
                    <Stop stopColor="#FFFFFF" stopOpacity={0.15} offset="100%" />
                </RadialGradient>
            </Defs>
        </Svg>
    );
};
