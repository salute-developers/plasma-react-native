import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Sum: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.72239 3.19331C3.40249 2.82419 3.66469 2.25 4.15314 2.25H11.6298C11.9446 2.25 12.1998 2.5052 12.1998 2.82V3.575C12.1998 3.85114 11.976 4.075 11.6998 4.075C11.4237 4.075 11.1998 3.85114 11.1998 3.575V3.25H5.80232L9.2695 7.66277C9.43035 7.83849 9.4468 8.10952 9.29654 8.30486L5.8772 12.75H11.1998V12.425C11.1998 12.1489 11.4237 11.925 11.6998 11.925C11.976 11.925 12.1998 12.1489 12.1998 12.425V13.18C12.1998 13.4948 11.9446 13.75 11.6298 13.75H4.15314C3.66469 13.75 3.4025 13.1758 3.72239 12.8067L7.88819 8L3.72239 3.19331Z"
            fill="currentColor"
        />
    </s.Svg>
);