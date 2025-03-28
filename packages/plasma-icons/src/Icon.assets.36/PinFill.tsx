import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PinFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5152 3.00003C12.4114 3.00003 11.5695 4.03204 11.7438 5.17127L12.8031 12.0909C12.9117 12.8003 12.7374 13.5251 12.3209 14.0965L9.26835 18.2842C8.00882 20.0121 9.18772 22.5001 11.266 22.5001L16.5155 22.5V30.75L18.0004 33L19.4853 30.75V22.5L24.734 22.5C26.8123 22.5 27.9912 20.0121 26.7316 18.2842L23.6791 14.0965C23.2626 13.5251 23.0883 12.8002 23.1969 12.0909L24.2562 5.17123C24.4305 4.03201 23.5886 3 22.4848 3L13.5152 3.00003Z"
            fill="currentColor"
        />
    </s.Svg>
);
