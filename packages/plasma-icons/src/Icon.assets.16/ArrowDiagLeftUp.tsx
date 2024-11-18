import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowDiagLeftUp: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M9.9636 4.88947L4.73633 4.84766M4.73633 4.84766L5.01385 9.83922M4.73633 4.84766L11.2772 11.3885"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </s.Svg>
);
