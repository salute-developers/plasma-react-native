import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronDown: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.46967 7.96967C4.76256 7.67678 5.23744 7.67678 5.53033 7.96967L12 14.4393L18.4697 7.96967C18.7626 7.67678 19.2374 7.67678 19.5303 7.96967C19.8232 8.26256 19.8232 8.73744 19.5303 9.03033L12.5303 16.0303C12.2374 16.3232 11.7626 16.3232 11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z"
            fill="currentColor"
        />
    </s.Svg>
);
