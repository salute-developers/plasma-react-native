import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LocationArrowFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.G clipPath="url(#clip0_7853_1567)">
            <s.Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.7981 4.59114C18.7969 4.22593 19.7665 5.19555 19.4013 6.19438L13.8643 21.3379C13.4376 22.5048 11.7545 22.4022 11.4728 21.1921L9.83532 14.1572L2.8004 12.5196C1.59031 12.238 1.48766 10.5549 2.65453 10.1282L17.7981 4.59114Z"
                fill="currentColor"
            />
        </s.G>
        <s.Defs>
            <s.ClipPath id="clip0_7853_1567">
                <s.Rect width="24" height="24" fill="currentColor" />
            </s.ClipPath>
        </s.Defs>
    </s.Svg>
);
