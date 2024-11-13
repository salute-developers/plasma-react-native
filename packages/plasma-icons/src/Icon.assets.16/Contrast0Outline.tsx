import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Contrast0Outline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00001 5.55L8.00001 10.45C9.3531 10.45 10.45 9.3531 10.45 8C10.45 6.6469 9.3531 5.55 8.00001 5.55ZM8.00001 11.5C9.933 11.5 11.5 9.93299 11.5 8C11.5 6.06701 9.933 4.5 8.00001 4.5C8 4.5 8.00001 4.5 8.00001 4.5C6.06701 4.5 4.5 6.067 4.5 8C4.5 9.933 6.06701 11.5 8.00001 11.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
