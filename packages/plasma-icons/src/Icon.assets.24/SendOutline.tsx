import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SendOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.5817 12.6727C21.8379 12.5464 22 12.2856 22 12C22 11.7145 21.8379 11.4537 21.5817 11.3274L3.33175 2.32736C3.04851 2.18768 2.70811 2.2404 2.48039 2.45921C2.25266 2.67801 2.1864 3.01603 2.31467 3.30462L6.17929 12L2.31467 20.6954C2.1864 20.984 2.25266 21.322 2.48039 21.5408C2.70811 21.7596 3.0485 21.8124 3.33174 21.6727L21.5817 12.6727ZM7.13336 10.4534L4.52714 4.58935L19.5543 12L4.52713 19.4107L7.13336 13.5467L10.4197 12.2321C10.6293 12.1483 10.6293 11.8517 10.4197 11.7679L7.13336 10.4534Z"
            fill="currentColor"
        />
    </s.Svg>
);
