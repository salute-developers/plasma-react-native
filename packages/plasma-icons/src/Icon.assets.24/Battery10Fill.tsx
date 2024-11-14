import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Battery10Fill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V4.10819C15.2884 4.15982 15.5316 4.2361 15.7528 4.34878C16.3549 4.65557 16.8444 5.14511 17.1512 5.74723C17.5 6.43175 17.5 7.32783 17.5 9.12V16.88C17.5 18.6722 17.5 19.5683 17.1512 20.2528C16.8444 20.8549 16.3549 21.3444 15.7528 21.6512C15.0683 22 14.1722 22 12.38 22H11.62C9.82783 22 8.93175 22 8.24723 21.6512C7.64511 21.3444 7.15557 20.8549 6.84878 20.2528C6.5 19.5683 6.5 18.6722 6.5 16.88V9.12C6.5 7.32783 6.5 6.43175 6.84878 5.74723C7.15557 5.14511 7.64511 4.65557 8.24723 4.34878C8.46838 4.2361 8.71161 4.15982 9 4.10819V3ZM8 19.5C8 20.0523 8.44772 20.5 9 20.5H15C15.5523 20.5 16 20.0523 16 19.5V19C16 18.7239 15.7761 18.5 15.5 18.5H8.5C8.22386 18.5 8 18.7239 8 19V19.5Z"
            fill="currentColor"
        />
    </s.Svg>
);