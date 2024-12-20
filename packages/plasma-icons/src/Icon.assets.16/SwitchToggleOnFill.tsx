import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwitchToggleOnFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.75 11.5C12.8211 11.5 14.5 9.82107 14.5 7.75C14.5 5.67893 12.8211 4 10.75 4H5.25C3.17893 4 1.5 5.67893 1.5 7.75C1.5 9.82107 3.17893 11.5 5.25 11.5H10.75ZM10.75 5C9.23122 5 8 6.23122 8 7.75C8 9.26878 9.23122 10.5 10.75 10.5C12.2688 10.5 13.5 9.26878 13.5 7.75C13.5 6.23122 12.2688 5 10.75 5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 7.75C15 10.0972 13.0972 12 10.75 12H5.25C2.90279 12 1 10.0972 1 7.75C1 5.40279 2.90279 3.5 5.25 3.5H10.75C13.0972 3.5 15 5.40279 15 7.75ZM5.25 11H10.75C8.95507 11 7.5 9.54493 7.5 7.75C7.5 5.95507 8.95507 4.5 10.75 4.5H5.25C3.45507 4.5 2 5.95507 2 7.75C2 9.54493 3.45507 11 5.25 11ZM10.75 10C11.9926 10 13 8.99264 13 7.75C13 6.50736 11.9926 5.5 10.75 5.5C9.50736 5.5 8.5 6.50736 8.5 7.75C8.5 8.99264 9.50736 10 10.75 10Z"
            fill="currentColor"
        />
    </s.Svg>
);
