import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Minus: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 18C5 17.4477 5.44772 17 6 17H30C30.5523 17 31 17.4477 31 18C31 18.5523 30.5523 19 30 19H6C5.44772 19 5 18.5523 5 18Z"
            fill="currentColor"
        />
    </s.Svg>
);
