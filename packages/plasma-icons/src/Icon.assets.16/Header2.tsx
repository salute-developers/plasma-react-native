import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header2: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 17 16" width={17} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.57129 8.47V11.5H8.57129V4.5H7.57129V7.32H5.07129V4.5H4.07129V11.5H5.07129V8.47H7.57129ZM9.32129 11.5H13.3213V10.3646H10.8223L11.1662 10.0191C12.6504 8.54804 13.162 7.64961 13.162 6.51424C13.162 5.29989 12.4995 4.51007 11.2668 4.5002C10.4366 4.49032 9.79089 4.85562 9.50578 5.19129V6.50437C9.89152 5.98111 10.445 5.6948 11.1158 5.70468C11.7448 5.70468 12.1305 6.08971 12.1305 6.77094C12.1305 7.48178 11.7532 8.21236 9.32129 10.6509V11.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
