import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Attention: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V4Z"
            fill="currentColor"
        />
        <s.Path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            fill="currentColor"
        />
    </s.Svg>
);
