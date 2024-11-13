import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowDiagLeftDown: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M5.01407 6.16122L4.97226 11.3885M4.97226 11.3885L9.96382 11.111M4.97226 11.3885L11.5131 4.84761"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </s.Svg>
);
