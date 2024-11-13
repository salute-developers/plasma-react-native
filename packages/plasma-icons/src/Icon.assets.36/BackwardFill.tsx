import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BackwardFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5508 5.01952C15.3289 4.76157 15.0762 4.45804 14.4779 4.50481C13.9612 4.54519 13.5758 4.84211 13.3617 5.02011C13.1278 5.21459 12.8567 5.48387 12.5636 5.77492L3.3295 14.9454C2.89017 15.3817 2.89017 16.0891 3.3295 16.5255L12.5636 25.6959C12.8567 25.987 13.1278 26.2563 13.3617 26.4508C13.5758 26.6288 13.9612 26.9257 14.4779 26.9661C15 26.9832 15.44 26.4476 15.6005 26.2384C15.7609 26.0291 15.9485 25.3627 15.9732 25.0865C16.0001 24.7847 16 24.4039 16 23.9923L16 20.3887C16 20.3682 16 20.3486 16 20.3299C16.0146 20.3303 16.0298 20.3307 16.0455 20.3312C20.4809 20.4631 23.6676 20.8715 25.6209 22.1609C27.5872 23.4589 28.9134 25.2177 30.5611 27.4029C30.5611 27.4029 30.6797 27.5739 30.75 27.728C31.4297 29.2176 33 29.4408 33 28.175V27.8388C33 18.5282 25.2485 11.6251 16 10.9538L16 7.26187C16.0001 6.8503 16.0001 6.46952 15.9732 6.16775C15.9485 5.89154 15.8874 5.41092 15.5508 5.01952Z"
            fill="currentColor"
        />
    </s.Svg>
);