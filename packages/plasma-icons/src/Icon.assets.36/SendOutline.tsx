import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SendOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.1906 18.8977C32.533 18.7296 32.7499 18.3814 32.7499 18C32.7499 17.6186 32.533 17.2704 32.1906 17.1024L4.6912 3.60236C4.31324 3.41681 3.85953 3.48789 3.55642 3.78015C3.25331 4.07241 3.16574 4.52322 3.3374 4.9077L9.18265 18L3.3374 31.0923C3.16574 31.4768 3.25331 31.9276 3.55642 32.2199C3.85953 32.5122 4.31323 32.5832 4.6912 32.3977L32.1906 18.8977ZM10.3062 15.6107L6.29004 6.61527L29.4807 18L6.29004 29.3848L10.3062 20.3893L15.4316 18.3484C15.7466 18.223 15.7466 17.777 15.4316 17.6516L10.3062 15.6107Z"
            fill="currentColor"
        />
    </s.Svg>
);
