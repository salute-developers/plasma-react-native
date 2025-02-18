import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CameraVideoOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 13.1379C3 10.8526 4.85261 9 7.13793 9H19.5517C21.837 9 23.6897 10.8526 23.6897 13.1379V22.8621C23.6897 25.1474 21.837 27 19.5517 27H7.13793C4.85262 27 3 25.1474 3 22.8621V13.1379ZM7.13793 11H19.5517C20.7325 11 21.6897 11.9572 21.6897 13.1379V22.8621C21.6897 24.0428 20.7325 25 19.5517 25H7.13793C5.95719 25 5 24.0428 5 22.8621V13.1379C5 11.9572 5.95718 11 7.13793 11Z"
            fill="currentColor"
        />
        <s.Path
            d="M33.0004 13.1988C33.0004 11.9261 31.4616 11.2887 30.5617 12.1886L25.7231 17.027C25.1799 17.5702 25.1635 18.4456 25.6859 19.0088L30.5245 24.2242C31.4078 25.1763 33.0004 24.5513 33.0004 23.2526V13.1988Z"
            fill="currentColor"
        />
    </s.Svg>
);
