import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Menu: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 8.5C4 7.94772 4.44772 7.5 5 7.5H30C30.5523 7.5 31 7.94772 31 8.5C31 9.05228 30.5523 9.5 30 9.5H5C4.44772 9.5 4 9.05228 4 8.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 17.5C4 16.9477 4.44772 16.5 5 16.5H30C30.5523 16.5 31 16.9477 31 17.5C31 18.0523 30.5523 18.5 30 18.5H5C4.44772 18.5 4 18.0523 4 17.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 26.5C4 25.9477 4.44772 25.5 5 25.5H30C30.5523 25.5 31 25.9477 31 26.5C31 27.0523 30.5523 27.5 30 27.5H5C4.44772 27.5 4 27.0523 4 26.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
