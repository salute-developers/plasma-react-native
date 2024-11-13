import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CameraVideoFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M7.28574 9C4.91879 9 3 10.9188 3 13.2857V22.7143C3 25.0812 4.91879 27 7.28574 27H19.7146C22.0815 27 24.0003 25.0812 24.0003 22.7143V13.2857C24.0003 10.9188 22.0815 9 19.7146 9H7.28574Z"
            fill="currentColor"
        />
        <s.Path
            d="M33.0003 13.1988C33.0003 11.9261 31.4615 11.2887 30.5615 12.1886L25.7229 17.027C25.1797 17.5702 25.1633 18.4456 25.6858 19.0088L30.5244 24.2242C31.4077 25.1763 33.0003 24.5513 33.0003 23.2526V13.1988Z"
            fill="currentColor"
        />
    </s.Svg>
);
