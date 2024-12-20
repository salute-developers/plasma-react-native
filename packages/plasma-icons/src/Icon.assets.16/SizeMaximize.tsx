import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SizeMaximize: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.02273 2.25C8.02273 1.97386 8.24658 1.75 8.52273 1.75H13.75C14.0261 1.75 14.25 1.97386 14.25 2.25V7.47727C14.25 7.75342 14.0261 7.97727 13.75 7.97727C13.4739 7.97727 13.25 7.75342 13.25 7.47727V3.45711L3.45711 13.25H7.47727C7.75342 13.25 7.97727 13.4739 7.97727 13.75C7.97727 14.0261 7.75342 14.25 7.47727 14.25H2.25C1.97386 14.25 1.75 14.0261 1.75 13.75V8.52273C1.75 8.24658 1.97386 8.02273 2.25 8.02273C2.52614 8.02273 2.75 8.24658 2.75 8.52273V12.5429L12.5429 2.75H8.52273C8.24658 2.75 8.02273 2.52614 8.02273 2.25Z"
            fill="currentColor"
        />
    </s.Svg>
);
