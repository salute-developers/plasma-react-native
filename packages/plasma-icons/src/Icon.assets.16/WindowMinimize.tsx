import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WindowMinimize: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.25 13C3.25 12.5858 3.58579 12.25 4 12.25H12C12.4142 12.25 12.75 12.5858 12.75 13C12.75 13.4142 12.4142 13.75 12 13.75H4C3.58579 13.75 3.25 13.4142 3.25 13Z"
            fill="currentColor"
        />
    </s.Svg>
);
