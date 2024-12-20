import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WrenchFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2401 6.18935C21.5086 3.92086 24.8723 3.41524 27.629 4.67248L23.7378 8.56373C23.1521 9.14952 23.1521 10.0993 23.7378 10.6851L25.3164 12.2636C25.9021 12.8494 26.8519 12.8494 27.4376 12.2636L31.3285 8.37273C32.5849 11.1292 32.0791 14.4924 29.811 16.7605C27.7473 18.8243 24.777 19.429 22.182 18.5747L10.2416 30.5154C8.92802 31.829 6.79828 31.829 5.4847 30.5154C4.17112 29.2017 4.17112 27.072 5.4847 25.7583L17.4256 13.8172C16.5719 11.2225 17.1767 8.25279 19.2401 6.18935Z"
            fill="currentColor"
        />
    </s.Svg>
);
