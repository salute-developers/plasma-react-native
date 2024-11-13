import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoQuality4K: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M1.5 8.68L4.53468 4.5H6.08101V8.6H6.83485V9.93H6.08101V11.5H4.62166V9.93H1.5V8.68ZM2.95935 8.6H4.62166V6.37L2.95935 8.6Z"
            fill="currentColor"
        />
        <s.Path
            d="M9.5614 8.65V11.5H8.01506V4.5H9.5614V7.28H10.4505L12.2095 4.5H14.0458L11.7843 7.78L14.5 11.5H12.5478L10.5375 8.65H9.5614Z"
            fill="currentColor"
        />
    </s.Svg>
);
