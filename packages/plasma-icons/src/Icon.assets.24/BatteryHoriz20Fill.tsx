import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BatteryHoriz20Fill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 10C22 9.44772 21.5523 9 21 9H19.8918C19.8402 8.71161 19.7639 8.46838 19.6512 8.24723C19.3444 7.64511 18.8549 7.15557 18.2528 6.84878C17.5683 6.5 16.6722 6.5 14.88 6.5H7.12C5.32783 6.5 4.43175 6.5 3.74723 6.84878C3.14511 7.15557 2.65557 7.64511 2.34878 8.24723C2 8.93175 2 9.82783 2 11.62V12.38C2 14.1722 2 15.0683 2.34878 15.7528C2.65557 16.3549 3.14511 16.8444 3.74723 17.1512C4.43175 17.5 5.32783 17.5 7.12 17.5H14.88C16.6722 17.5 17.5683 17.5 18.2528 17.1512C18.8549 16.8444 19.3444 16.3549 19.6512 15.7528C19.7639 15.5316 19.8402 15.2884 19.8918 15H21C21.5523 15 22 14.5523 22 14V10ZM3.5 9C3.5 8.44772 3.94772 8 4.5 8H5C5.27614 8 5.5 8.22386 5.5 8.5V15.5C5.5 15.7761 5.27614 16 5 16H4.5C3.94772 16 3.5 15.5523 3.5 15V9ZM6.6001 8C6.32396 8 6.1001 8.22386 6.1001 8.5V15.5C6.1001 15.7761 6.32396 16 6.6001 16H7.6001C7.87624 16 8.1001 15.7761 8.1001 15.5V8.5C8.1001 8.22386 7.87624 8 7.6001 8H6.6001Z"
            fill="currentColor"
        />
    </s.Svg>
);