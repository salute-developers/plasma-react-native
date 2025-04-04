import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Filter: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 4.5C1.5 4.22386 1.72386 4 2 4H14C14.2761 4 14.5 4.22386 14.5 4.5C14.5 4.77614 14.2761 5 14 5H2C1.72386 5 1.5 4.77614 1.5 4.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 8C3.5 7.72386 3.72386 7.5 4 7.5H12C12.2761 7.5 12.5 7.72386 12.5 8C12.5 8.27614 12.2761 8.5 12 8.5H4C3.72386 8.5 3.5 8.27614 3.5 8Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.5 11.5C5.5 11.2239 5.72386 11 6 11H10C10.2761 11 10.5 11.2239 10.5 11.5C10.5 11.7761 10.2761 12 10 12H6C5.72386 12 5.5 11.7761 5.5 11.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
