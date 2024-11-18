import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header2: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 19.0743V26H18.25V10H16V16.4457H10.7153V10H8.5V26H10.7153V19.0743H16ZM19.75 26H28.75V23.4049H23.1274L23.9009 22.615C27.2406 19.2527 28.3915 17.1991 28.3915 14.604C28.3915 11.8283 26.9009 10.023 24.1274 10.0004C22.2594 9.97788 20.8066 10.8128 20.1651 11.5801V14.5814C21.033 13.3854 22.2783 12.731 23.7877 12.7535C25.2028 12.7535 26.0708 13.6336 26.0708 15.1907C26.0708 16.8155 25.2217 18.4854 19.75 24.0593V26Z"
            fill="currentColor"
        />
    </s.Svg>
);
