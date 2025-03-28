import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Filter: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 9.5C4.5 8.94772 4.94772 8.5 5.5 8.5H30.5C31.0523 8.5 31.5 8.94772 31.5 9.5C31.5 10.0523 31.0523 10.5 30.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5 17.5C8.5 16.9477 8.94772 16.5 9.5 16.5H26.5C27.0523 16.5 27.5 16.9477 27.5 17.5C27.5 18.0523 27.0523 18.5 26.5 18.5H9.5C8.94772 18.5 8.5 18.0523 8.5 17.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 25.5C12 24.9477 12.4477 24.5 13 24.5H23C23.5523 24.5 24 24.9477 24 25.5C24 26.0523 23.5523 26.5 23 26.5H13C12.4477 26.5 12 26.0523 12 25.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
