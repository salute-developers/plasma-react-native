import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowDiagRightDown: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M6.28627 11.1104L11.5135 11.1522M11.5135 11.1522L11.236 6.16064M11.5135 11.1522L4.97266 4.61133"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </s.Svg>
);
