import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BatteryChargeFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.95455 1.7C5.95455 1.3134 6.26795 1 6.65455 1H9.34545C9.73205 1 10.0455 1.3134 10.0455 1.7V2.48427C10.2276 2.52013 10.3839 2.57126 10.5269 2.64414C10.9484 2.8589 11.2911 3.20158 11.5059 3.62306C11.75 4.10222 11.75 4.72948 11.75 5.984V11.416C11.75 12.6705 11.75 13.2978 11.5059 13.7769C11.2911 14.1984 10.9484 14.5411 10.5269 14.7559C10.0478 15 9.42052 15 8.166 15H7.834C6.57948 15 5.95222 15 5.47306 14.7559C5.05158 14.5411 4.7089 14.1984 4.49415 13.7769C4.25 13.2978 4.25 12.6705 4.25 11.416V5.984C4.25 4.72948 4.25 4.10222 4.49415 3.62306C4.7089 3.20158 5.05158 2.8589 5.47306 2.64414C5.61611 2.57126 5.77235 2.52013 5.95455 2.48427V1.7ZM5.7628 8.90404C5.64946 9.05649 5.76289 9.38177 5.9579 9.38177H7.85354L7.13832 11.2806C7.10657 11.5181 7.42633 11.6386 7.57121 11.4438L10.2878 8.49608C10.4012 8.34363 10.2946 8.01813 10.0996 8.01813H8.18141L8.8746 6.11958C8.90637 5.88206 8.58659 5.76149 8.44171 5.95635L5.7628 8.90404Z"
            fill="currentColor"
        />
    </s.Svg>
);