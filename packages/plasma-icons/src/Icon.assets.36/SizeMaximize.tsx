import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SizeMaximize: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.1364 6.5C18.5841 6.5 18.1364 6.05228 18.1364 5.5C18.1364 4.94772 18.5841 4.5 19.1364 4.5H30.5C31.0523 4.5 31.5 4.94772 31.5 5.5V16.8636C31.5 17.4159 31.0523 17.8636 30.5 17.8636C29.9477 17.8636 29.5 17.4159 29.5 16.8636V7.91421L7.91421 29.5H16.8636C17.4159 29.5 17.8636 29.9477 17.8636 30.5C17.8636 31.0523 17.4159 31.5 16.8636 31.5H5.5C4.94772 31.5 4.5 31.0523 4.5 30.5V19.1364C4.5 18.5841 4.94772 18.1364 5.5 18.1364C6.05228 18.1364 6.5 18.5841 6.5 19.1364V28.0858L28.0858 6.5H19.1364Z"
            fill="currentColor"
        />
    </s.Svg>
);
