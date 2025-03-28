import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RowHeightFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M4 3.75C4 3.33579 4.33579 3 4.75 3H19.25C19.6642 3 20 3.33579 20 3.75C20 4.16421 19.6642 4.5 19.25 4.5H4.75C4.33579 4.5 4 4.16421 4 3.75Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.5 6C3.67157 6 3 6.67157 3 7.5V10C3 10.8284 3.67157 11.5 4.5 11.5H19.5C20.3284 11.5 21 10.8284 21 10V7.5C21 6.67157 20.3284 6 19.5 6H4.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.5 12.5C3.67157 12.5 3 13.1716 3 14V16.5C3 17.3284 3.67157 18 4.5 18H19.5C20.3284 18 21 17.3284 21 16.5V14C21 13.1716 20.3284 12.5 19.5 12.5H4.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.75 19.5C4.33579 19.5 4 19.8358 4 20.25C4 20.6642 4.33579 21 4.75 21H19.25C19.6642 21 20 20.6642 20 20.25C20 19.8358 19.6642 19.5 19.25 19.5H4.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
