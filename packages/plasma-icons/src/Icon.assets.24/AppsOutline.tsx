import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const AppsOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 13C4.01472 13 2 15.0147 2 17.5C2 19.9853 4.01472 22 6.5 22C8.98528 22 11 19.9853 11 17.5C11 15.0147 8.98528 13 6.5 13ZM3.5 17.5C3.5 15.8431 4.84315 14.5 6.5 14.5C8.15685 14.5 9.5 15.8431 9.5 17.5C9.5 19.1569 8.15685 20.5 6.5 20.5C4.84315 20.5 3.5 19.1569 3.5 17.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 6.5C13 4.01472 15.0147 2 17.5 2C19.9853 2 22 4.01472 22 6.5C22 8.98528 19.9853 11 17.5 11C15.0147 11 13 8.98528 13 6.5ZM17.5 3.5C15.8431 3.5 14.5 4.84315 14.5 6.5C14.5 8.15685 15.8431 9.5 17.5 9.5C19.1569 9.5 20.5 8.15685 20.5 6.5C20.5 4.84315 19.1569 3.5 17.5 3.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13ZM14.5 17.5C14.5 15.8431 15.8431 14.5 17.5 14.5C19.1569 14.5 20.5 15.8431 20.5 17.5C20.5 19.1569 19.1569 20.5 17.5 20.5C15.8431 20.5 14.5 19.1569 14.5 17.5Z"
            fill="currentColor"
        />
    </s.Svg>
);