import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LineWeight: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path d="M2 7H22V4H2V7Z" fill="currentColor" />
        <s.Path d="M22 12H2V10H22V12Z" fill="currentColor" />
        <s.Path d="M2 16.5H22V15H2V16.5Z" fill="currentColor" />
        <s.Path d="M2 20H22V19H2V20Z" fill="currentColor" />
    </s.Svg>
);
