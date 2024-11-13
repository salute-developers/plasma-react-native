import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DropFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.62385 1.12713C7.8449 0.957623 8.1551 0.957623 8.37615 1.12713L8.49077 1.2179L8.7385 1.4236C8.87615 1.54058 9.02389 1.67043 9.17973 1.81251C9.77202 2.35253 10.364 2.96085 10.9177 3.62617C12.5263 5.55903 13.5 7.57574 13.5 9.59992C13.5 12.5821 11.0374 15 8 15C4.9626 15 2.5 12.5821 2.5 9.59992C2.5 7.57574 3.47373 5.55903 5.08234 3.62617C5.63604 2.96085 6.22798 2.35253 6.82027 1.81251C6.97611 1.67043 7.12385 1.54058 7.2615 1.4236L7.3957 1.31093L7.62385 1.12713Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.49077 1.2179L8.37615 1.12713C8.1551 0.957623 7.8449 0.957623 7.62385 1.12713L7.3957 1.31093L7.2615 1.4236C7.12385 1.54058 6.97611 1.67043 6.82027 1.81251C6.22798 2.35253 5.63604 2.96085 5.08234 3.62617C3.47373 5.55903 2.5 7.57574 2.5 9.59992C2.5 12.5821 4.9626 15 8 15C11.0374 15 13.5 12.5821 13.5 9.59992C13.5 7.57574 12.5263 5.55903 10.9177 3.62617C10.364 2.96085 9.77202 2.35253 9.17973 1.81251C9.02389 1.67043 8.87615 1.54058 8.7385 1.4236L8.49077 1.2179ZM8.0952 2.18923L7.99946 2.10974L7.90683 2.18751C7.77893 2.29625 7.64067 2.41777 7.49401 2.55148C6.93235 3.06357 6.37267 3.63898 5.85097 4.26585C4.32048 6.10486 3.5 7.90092 3.5 9.59992C3.5 12.0126 5.49752 14 8 14C10.5025 14 12.5 12.0126 12.5 9.59992C12.5 7.90092 11.6795 6.10486 10.149 4.26585C9.62733 3.63898 9.06765 3.06357 8.50599 2.55148C8.36011 2.41848 8.22253 2.29754 8.0952 2.18923Z"
            fill="currentColor"
        />
    </s.Svg>
);
