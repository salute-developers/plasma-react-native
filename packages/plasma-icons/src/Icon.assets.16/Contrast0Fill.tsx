import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Contrast0Fill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99999 5.55L7.99999 10.45C6.6469 10.45 5.55 9.3531 5.55 8C5.55 6.6469 6.6469 5.55 7.99999 5.55ZM7.99999 11.5C6.067 11.5 4.5 9.93299 4.5 8C4.5 6.06701 6.067 4.5 7.99999 4.5C7.99999 4.5 8 4.5 7.99999 4.5C9.93299 4.5 11.5 6.067 11.5 8C11.5 9.933 9.93299 11.5 7.99999 11.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
