import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RowHeightMaxFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M6.00002 5.5C6.00002 4.94772 6.44773 4.5 7.00002 4.5H29C29.5523 4.5 30 4.94772 30 5.5C30 6.05228 29.5523 6.5 29 6.5H7.00002C6.44773 6.5 6.00002 6.05228 6.00002 5.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.5 12.25C4.5 10.1789 6.17893 8.5 8.25 8.5H27.75C29.8211 8.5 31.5 10.1789 31.5 12.25V23.75C31.5 25.8211 29.8211 27.5 27.75 27.5H8.25C6.17893 27.5 4.5 25.8211 4.5 23.75V12.25Z"
            fill="currentColor"
        />
        <s.Path
            d="M7.00002 29.5C6.44773 29.5 6.00002 29.9477 6.00002 30.5C6.00002 31.0523 6.44773 31.5 7.00002 31.5H29C29.5523 31.5 30 31.0523 30 30.5C30 29.9477 29.5523 29.5 29 29.5H7.00002Z"
            fill="currentColor"
        />
    </s.Svg>
);
