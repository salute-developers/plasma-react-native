import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowDiagRightUp: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M11.2359 9.83908L11.2777 4.61182M11.2777 4.61182L6.28613 4.88934M11.2777 4.61182L4.73682 11.1527"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </s.Svg>
);
