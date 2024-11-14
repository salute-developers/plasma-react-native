import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Brightness0Fill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Circle cx="12" cy="12" r="5" fill="currentColor" />
    </s.Svg>
);