import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Attention: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M8.75 2.5C8.75 2.08579 8.41421 1.75 8 1.75C7.58579 1.75 7.25 2.08579 7.25 2.5V9.5C7.25 9.91421 7.58579 10.25 8 10.25C8.41421 10.25 8.75 9.91421 8.75 9.5V2.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75C8.75 12.3358 8.41421 12 8 12C7.58579 12 7.25 12.3358 7.25 12.75C7.25 13.1642 7.58579 13.5 8 13.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
