import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Menu: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 3.5C1.5 3.22386 1.72386 3 2 3H14C14.2761 3 14.5 3.22386 14.5 3.5C14.5 3.77614 14.2761 4 14 4H2C1.72386 4 1.5 3.77614 1.5 3.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 8C1.5 7.72386 1.72386 7.5 2 7.5H14C14.2761 7.5 14.5 7.72386 14.5 8C14.5 8.27614 14.2761 8.5 14 8.5H2C1.72386 8.5 1.5 8.27614 1.5 8Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 12.5C1.5 12.2239 1.72386 12 2 12H14C14.2761 12 14.5 12.2239 14.5 12.5C14.5 12.7761 14.2761 13 14 13H2C1.72386 13 1.5 12.7761 1.5 12.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
