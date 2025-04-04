import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowUp: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.30355 2.87514C8.44163 2.87842 8.57221 2.93868 8.6643 3.04162L11.9976 6.76742C12.1818 6.97323 12.1642 7.28932 11.9584 7.47344C11.7526 7.65756 11.4365 7.63999 11.2524 7.43419L8.79167 4.68376V12.6252C8.79167 12.9013 8.56781 13.1252 8.29167 13.1252C8.01552 13.1252 7.79167 12.9013 7.79167 12.6252V4.5959L4.98137 7.45152C4.78768 7.64834 4.4711 7.65087 4.27429 7.45718C4.07747 7.26348 4.07494 6.94691 4.26863 6.75009L7.9353 3.02429C8.03218 2.92584 8.16547 2.87186 8.30355 2.87514Z"
            fill="currentColor"
        />
    </s.Svg>
);
