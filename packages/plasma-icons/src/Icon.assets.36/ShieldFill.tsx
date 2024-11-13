import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ShieldFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M5.5 8.92069C10.2684 8.92069 16.5679 4.94376 17.7898 4.14173C17.919 4.05692 18.081 4.05692 18.2102 4.14173C19.4321 4.94376 25.7316 8.92069 30.5 8.92069C30.5 29.6965 18.4829 31.9206 18.0141 31.9995C17.9992 32.002 18.0008 32.002 17.9859 31.9995C17.5171 31.9206 5.5 29.6965 5.5 8.92069Z"
            fill="currentColor"
        />
    </s.Svg>
);
