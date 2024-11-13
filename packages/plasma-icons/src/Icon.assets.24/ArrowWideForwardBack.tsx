import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowWideForwardBack: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M14.5303 4.21969C14.3158 4.00519 13.9932 3.94103 13.713 4.05711C13.4327 4.1732 13.25 4.44668 13.25 4.75002V9.75002C13.25 10.1642 13.5858 10.5 14 10.5C14.4142 10.5 14.75 10.1642 14.75 9.75002V6.56068L20.1893 12L14.75 17.4394V15.25C14.75 14.8358 14.4142 14.5 14 14.5H7C6.58579 14.5 6.25 14.8358 6.25 15.25C6.25 15.6642 6.58579 16 7 16H13.25V19.25C13.25 19.5534 13.4327 19.8268 13.713 19.9429C13.9932 20.059 14.3158 19.9949 14.5303 19.7804L21.7803 12.5304C22.0732 12.2375 22.0732 11.7626 21.7803 11.4697L14.5303 4.21969Z"
            fill="currentColor"
        />
        <s.Path
            d="M5.53033 8.03035C5.82322 7.73746 5.82322 7.26259 5.53033 6.96969C5.23744 6.6768 4.76256 6.6768 4.46967 6.96969L2.21967 9.21969C1.92678 9.51259 1.92678 9.98746 2.21967 10.2804L4.46967 12.5304C4.76256 12.8232 5.23744 12.8232 5.53033 12.5304C5.82322 12.2375 5.82322 11.7626 5.53033 11.4697L4.56066 10.5H11C11.4142 10.5 11.75 10.1642 11.75 9.75002C11.75 9.33581 11.4142 9.00002 11 9.00002H4.56066L5.53033 8.03035Z"
            fill="currentColor"
        />
    </s.Svg>
);