import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChartDistributionFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M9.5 4.5V21H14.5V4.5C14.5 3.67157 13.8284 3 13 3H11C10.1716 3 9.5 3.67157 9.5 4.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M16.5 8.5V21H21.5V8.5C21.5 7.67157 20.8284 7 20 7H18C17.1716 7 16.5 7.67157 16.5 8.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M2.5 11.5V21H7.5V11.5C7.5 10.6716 6.82843 10 6 10H4C3.17157 10 2.5 10.6716 2.5 11.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
