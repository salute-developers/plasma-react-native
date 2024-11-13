import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Brightness0Fill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
            fill="currentColor"
        />
    </s.Svg>
);
