import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SortSmallBig: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 9.5C4 8.94772 4.44772 8.5 5 8.5H30C30.5523 8.5 31 8.94772 31 9.5C31 10.0523 30.5523 10.5 30 10.5H5C4.44772 10.5 4 10.0523 4 9.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 17.5C12 16.9477 12.4477 16.5 13 16.5H30C30.5523 16.5 31 16.9477 31 17.5C31 18.0523 30.5523 18.5 30 18.5H13C12.4477 18.5 12 18.0523 12 17.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 25.5C19 24.9477 19.4477 24.5 20 24.5H30C30.5523 24.5 31 24.9477 31 25.5C31 26.0523 30.5523 26.5 30 26.5H20C19.4477 26.5 19 26.0523 19 25.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
