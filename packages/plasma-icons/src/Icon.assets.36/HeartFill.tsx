import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HeartFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M11.6281 6.5C7.05579 6.5 4.25 10.4758 4.25 13.7369C4.25 19.5227 9.67685 24.9678 14.7679 29.0377C15.8492 29.902 16.3898 30.3342 17.0756 30.5238C17.6422 30.6805 18.3578 30.6805 18.9244 30.5238C19.6102 30.3342 20.1508 29.902 21.2321 29.0377C26.3232 24.9678 31.75 19.5227 31.75 13.7369C31.75 10.4758 28.9442 6.5 24.372 6.5C21.8184 6.5 19.6369 8.5243 18 10.4474C16.3631 8.5243 14.1816 6.5 11.6281 6.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
