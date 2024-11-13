import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LocationArrowOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.G clipPath="url(#clip0_7853_1566)">
            <s.Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.801 4.59065C18.7999 4.22544 19.7695 5.19506 19.4043 6.19389L13.8672 21.3375C13.4405 22.5043 11.7574 22.4017 11.4758 21.1916L9.83825 14.1567L2.80333 12.5191C1.59324 12.2375 1.49059 10.5544 2.65746 10.1277L17.801 4.59065ZM17.8107 6.18425L3.96048 11.2484L10.3298 12.731C10.7937 12.839 11.1559 13.2012 11.2639 13.6651L12.7465 20.0344L17.8107 6.18425Z"
                fill="currentColor"
            />
        </s.G>
        <s.Defs>
            <s.ClipPath id="clip0_7853_1566">
                <s.Rect width="24" height="24" fill="currentColor" />
            </s.ClipPath>
        </s.Defs>
    </s.Svg>
);
