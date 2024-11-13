import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MicOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99952 1.52539C6.54683 1.52539 5.3692 2.70302 5.3692 4.15571V8.19605C5.3692 9.64874 6.54683 10.8264 7.99952 10.8264C9.4522 10.8264 10.6298 9.64874 10.6298 8.19605V4.15571C10.6298 2.70302 9.4522 1.52539 7.99952 1.52539ZM6.3692 4.15571C6.3692 3.25531 7.09912 2.52539 7.99952 2.52539C8.89992 2.52539 9.62983 3.25531 9.62983 4.15571V8.19605C9.62983 9.09645 8.89992 9.82637 7.99952 9.82637C7.09912 9.82637 6.3692 9.09645 6.3692 8.19605V4.15571ZM12.7193 8.85896C12.7563 8.5853 12.5644 8.33348 12.2908 8.2965C12.0171 8.25951 11.7653 8.45137 11.7283 8.72503C11.6101 9.59957 11.1693 10.4052 10.4841 10.9906C9.79859 11.5762 8.9157 11.9007 7.99963 11.9007C7.08357 11.9007 6.20068 11.5762 5.51518 10.9906C4.82999 10.4052 4.38914 9.59957 4.27094 8.72503C4.23396 8.45137 3.98214 8.25951 3.70849 8.2965C3.43483 8.33348 3.24297 8.5853 3.27995 8.85896C3.4316 9.98108 3.99651 11.0084 4.86563 11.7509C5.6079 12.385 6.5291 12.7749 7.49963 12.875V14.4759C7.49963 14.7521 7.72349 14.9759 7.99963 14.9759C8.27578 14.9759 8.49963 14.7521 8.49963 14.4759V12.875C9.47017 12.7749 10.3914 12.385 11.1336 11.7509C12.0028 11.0084 12.5677 9.98108 12.7193 8.85896Z"
            fill="currentColor"
        />
    </s.Svg>
);
