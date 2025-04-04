import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoRecordOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 7.99821C2 4.68554 4.68576 2 7.99893 2C11.3121 2 13.9979 4.68554 13.9979 7.99821C13.9979 11.3109 11.3121 13.9964 7.99893 13.9964C4.68576 13.9964 2 11.3109 2 7.99821ZM7.99893 1C4.13358 1 1 4.13315 1 7.99821C1 11.8633 4.13358 14.9964 7.99893 14.9964C11.8643 14.9964 14.9979 11.8633 14.9979 7.99821C14.9979 4.13315 11.8643 1 7.99893 1ZM7.99953 11.1597C9.74566 11.1597 11.1612 9.74434 11.1612 7.9984C11.1612 6.25247 9.74566 4.83711 7.99953 4.83711C6.25341 4.83711 4.83789 6.25247 4.83789 7.9984C4.83789 9.74434 6.25341 11.1597 7.99953 11.1597Z"
            fill="currentColor"
        />
    </s.Svg>
);
