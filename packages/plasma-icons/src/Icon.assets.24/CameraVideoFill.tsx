import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CameraVideoFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M4.85714 6C3.27919 6 2 7.27919 2 8.85714V15.1429C2 16.7208 3.27919 18 4.85714 18H13.1429C14.7208 18 16 16.7208 16 15.1429V8.85714C16 7.27919 14.7208 6 13.1429 6H4.85714Z"
            fill="currentColor"
        />
        <s.Path
            d="M22.0003 8.79931C22.0003 7.95084 20.9745 7.52592 20.3745 8.12587L17.1488 11.3515C16.7867 11.7136 16.7758 12.2972 17.1241 12.6726L20.3497 16.1496C20.9386 16.7843 22.0003 16.3676 22.0003 15.5018V8.79931Z"
            fill="currentColor"
        />
    </s.Svg>
);
