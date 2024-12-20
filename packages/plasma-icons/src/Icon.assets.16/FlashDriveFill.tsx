import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const FlashDriveFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.42501 1.00049C5.74846 1.00049 5.20001 1.54894 5.20001 2.22549V4.50971C4.41254 4.59678 3.80005 5.26441 3.80005 6.0751V13.4251C3.80005 14.2949 4.5052 15.0001 5.37505 15.0001H10.625C11.4949 15.0001 12.2 14.2949 12.2 13.4251V6.0751C12.2 5.26439 11.5875 4.59674 10.8 4.50971V2.22549C10.8 1.54894 10.2516 1.00049 9.57501 1.00049H6.42501ZM9.75001 4.5001V2.22549C9.75001 2.12884 9.67166 2.05049 9.57501 2.05049H6.42501C6.32836 2.05049 6.25001 2.12884 6.25001 2.22549V4.5001H9.75001Z"
            fill="currentColor"
        />
    </s.Svg>
);
