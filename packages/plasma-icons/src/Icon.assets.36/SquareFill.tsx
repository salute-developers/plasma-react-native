import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SquareFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M4.5 7.125C4.5 5.67525 5.67525 4.5 7.125 4.5H28.875C30.3247 4.5 31.5 5.67525 31.5 7.125V28.875C31.5 30.3247 30.3247 31.5 28.875 31.5H7.125C5.67525 31.5 4.5 30.3247 4.5 28.875V7.125Z"
            fill="currentColor"
        />
    </s.Svg>
);
