import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwitchToggleOffFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.25 4C3.17893 4 1.5 5.67893 1.5 7.75C1.5 9.82107 3.17893 11.5 5.25 11.5H10.75C12.8211 11.5 14.5 9.82107 14.5 7.75C14.5 5.67893 12.8211 4 10.75 4H5.25ZM5.25 10.5C6.76878 10.5 8 9.26878 8 7.75C8 6.23122 6.76878 5 5.25 5C3.73122 5 2.5 6.23122 2.5 7.75C2.5 9.26878 3.73122 10.5 5.25 10.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 7.75C1 5.40279 2.90279 3.5 5.25 3.5H10.75C13.0972 3.5 15 5.40279 15 7.75C15 10.0972 13.0972 12 10.75 12H5.25C2.90279 12 1 10.0972 1 7.75ZM10.75 4.5H5.25C7.04493 4.5 8.5 5.95507 8.5 7.75C8.5 9.54493 7.04493 11 5.25 11H10.75C12.5449 11 14 9.54493 14 7.75C14 5.95507 12.5449 4.5 10.75 4.5ZM5.25 5.5C4.00736 5.5 3 6.50736 3 7.75C3 8.99264 4.00736 10 5.25 10C6.49264 10 7.5 8.99264 7.5 7.75C7.5 6.50736 6.49264 5.5 5.25 5.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
