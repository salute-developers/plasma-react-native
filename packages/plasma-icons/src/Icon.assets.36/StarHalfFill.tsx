import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const StarHalfFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.707 4.32995C17.2451 3.27544 18.7519 3.27543 19.29 4.32995L23.1545 11.9024L31.5506 13.2378C32.7198 13.4237 33.1854 14.8567 32.3488 15.6944L26.3411 21.7098L27.6657 30.1075C27.8501 31.277 26.6311 32.1626 25.5759 31.6258L17.9985 27.7711L10.4211 31.6258C9.36585 32.1626 8.14685 31.277 8.3313 30.1075L9.65586 21.7098L3.64819 15.6944C2.81159 14.8567 3.2772 13.4237 4.44641 13.2378L12.8425 11.9024L16.707 4.32995ZM17.9985 6.19902V25.704C18.2239 25.704 18.4494 25.7565 18.6559 25.8616L25.5222 29.3546L24.3219 21.745C24.2497 21.2872 24.4007 20.8224 24.7283 20.4944L30.1721 15.0437L22.5641 13.8337C22.1063 13.7609 21.711 13.4736 21.5003 13.0608L17.9985 6.19902Z"
            fill="currentColor"
        />
    </s.Svg>
);
