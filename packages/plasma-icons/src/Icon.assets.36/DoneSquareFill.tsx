import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoneSquareFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.375 4.5C6.68261 4.5 4.5 6.68261 4.5 9.375V26.625C4.5 29.3174 6.68261 31.5 9.375 31.5H26.625C29.3174 31.5 31.5 29.3174 31.5 26.625V9.375C31.5 6.68261 29.3174 4.5 26.625 4.5H9.375ZM26.9572 13.8321C27.3477 13.4416 27.3477 12.8084 26.9572 12.4179C26.5667 12.0274 25.9335 12.0274 25.543 12.4179L15.0001 22.9608L11.2072 19.1679C10.8167 18.7774 10.1835 18.7774 9.79296 19.1679C9.40244 19.5584 9.40244 20.1916 9.79296 20.5821L14.293 25.0821C14.6835 25.4726 15.3167 25.4726 15.7072 25.0821L26.9572 13.8321Z"
            fill="currentColor"
        />
    </s.Svg>
);
