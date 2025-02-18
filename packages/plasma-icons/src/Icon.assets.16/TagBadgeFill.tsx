import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TagBadgeFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.42171 1C8.96082 1 8.51882 1.18427 8.19293 1.51227L2.05988 7.68506C1.31338 8.43639 1.31337 9.65455 2.05988 10.4059L5.56776 13.9365C6.31426 14.6878 7.52458 14.6878 8.27108 13.9365L14.491 7.67627C14.8169 7.34826 15 6.90339 15 6.43953V2.74902C15 1.78306 14.222 1 13.2622 1H9.42171ZM11.5251 5.54804C12.1009 5.54804 12.5677 5.0782 12.5677 4.49863C12.5677 3.91906 12.1009 3.44922 11.5251 3.44922C10.9492 3.44922 10.4824 3.91906 10.4824 4.49863C10.4824 5.0782 10.9492 5.54804 11.5251 5.54804Z"
            fill="currentColor"
        />
    </s.Svg>
);
