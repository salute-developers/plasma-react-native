import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoQualityHD: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M13.2948 25.5V19.3929H6.30756V25.5H3V10.5H6.30756V16.1786H13.2948V10.5H16.6024V25.5H13.2948Z"
            fill="currentColor"
        />
        <s.Path
            d="M19.625 10.5H24.5244C30.3953 10.5 33 13.0929 33 17.7C33 23.0357 29.6924 25.5 24.7104 25.5H19.625V10.5ZM22.9326 22.2857H24.8138C28.1007 22.2857 29.5477 20.5714 29.5477 17.9571C29.5477 15.1714 28.266 13.7143 24.7724 13.7143H22.9326V22.2857Z"
            fill="currentColor"
        />
    </s.Svg>
);
