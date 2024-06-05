import React from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

interface SpinnerSvgProps {
    width: number | string;
    height: number | string;
    color: string;
    id?: string;
}

export const SpinnerSvg: React.FC<SpinnerSvgProps> = ({ id, color, width, height, ...props }) => (
    <Svg viewBox="0 0 56 56" fill="none" width={width} height={height} {...props}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28 0C12.536 0 0 12.536 0 28s12.536 28 28 28h.055H28v-4C14.745 52 4 41.255 4 28S14.745 4 28 4V0z"
            fill={`url(#prefix__paint0_linear${id})`}
        />
        <Path
            d="M56 28c0 14.791-11.47 26.904-26 27.93-1.102.077-2-.825-2-1.93s.899-1.991 2-2.082C42.318 50.902 52 40.58 52 28 52 14.745 41.255 4 28 4V0c15.464 0 28 12.536 28 28z"
            fill={`url(#prefix__paint1_linear${id})`}
        />
        <Defs>
            <LinearGradient
                id={`prefix__paint0_linear${id}`}
                x1={0}
                y1={56}
                x2={0}
                y2={0}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor={color} stopOpacity={0} />
                <Stop offset={0.048} stopColor={color} stopOpacity={0} />
                <Stop offset={0.952} stopColor={color} stopOpacity={0.5} />
                <Stop offset={1} stopColor={color} stopOpacity={0.5} />
            </LinearGradient>
            <LinearGradient
                id={`prefix__paint1_linear${id}`}
                x1={28}
                y1={56}
                x2={28}
                y2={0}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor={color} />
                <Stop offset={0.048} stopColor={color} />
                <Stop offset={0.952} stopColor={color} stopOpacity={0.5} />
                <Stop offset={1} stopColor={color} stopOpacity={0.5} />
            </LinearGradient>
        </Defs>
    </Svg>
);
