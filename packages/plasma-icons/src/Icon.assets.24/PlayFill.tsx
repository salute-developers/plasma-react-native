import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlayFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M19.75 10.7009C20.75 11.2783 20.75 12.7217 19.75 13.299L9.25 19.3612C8.25 19.9385 7 19.2168 7 18.0621L7 5.93779C7 4.78308 8.25 4.0614 9.25 4.63875L19.75 10.7009Z"
            fill="currentColor"
        />
    </s.Svg>
);
