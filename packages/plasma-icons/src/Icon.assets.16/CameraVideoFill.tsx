import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CameraVideoFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M3.00001 3.73291C1.89544 3.73291 1 4.62835 1 5.73292V10.2329C1 11.3375 1.89544 12.2329 3.00001 12.2329H8.80012C9.9047 12.2329 10.8001 11.3375 10.8001 10.2329V5.73292C10.8001 4.62835 9.9047 3.73291 8.80012 3.73291H3.00001Z"
            fill="currentColor"
        />
        <s.Path
            d="M15.0002 5.62279C15.0002 5.02696 14.2781 4.73037 13.8593 5.15417L11.5961 7.44425C11.3462 7.69705 11.3386 8.10141 11.5788 8.3634L13.8421 10.8319C14.253 11.2801 15.0002 10.9894 15.0002 10.3814V5.62279Z"
            fill="currentColor"
        />
    </s.Svg>
);
