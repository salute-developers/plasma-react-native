import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RublePlus: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.53349 4.5C6.53349 3.94772 6.9812 3.5 7.53349 3.5H11.7228C14.1652 3.5 16.1451 5.47994 16.1451 7.92231C16.1451 10.3647 14.1652 12.3446 11.7228 12.3446H8.53349V14.1472H11.3393C11.8916 14.1472 12.3393 14.5949 12.3393 15.1472C12.3393 15.6995 11.8916 16.1472 11.3393 16.1472H8.53349V17.4287C8.53349 17.981 8.08577 18.4287 7.53349 18.4287C6.9812 18.4287 6.53349 17.981 6.53349 17.4287V16.1472H5.25C4.69772 16.1472 4.25 15.6995 4.25 15.1472C4.25 14.5949 4.69772 14.1472 5.25 14.1472H6.53349V12.3446H5.25C4.69772 12.3446 4.25 11.8969 4.25 11.3446C4.25 10.7923 4.69772 10.3446 5.25 10.3446H6.53349V4.5ZM8.53349 10.3446H11.7228C13.0606 10.3446 14.1451 9.26011 14.1451 7.92231C14.1451 6.5845 13.0606 5.5 11.7228 5.5H8.53349V10.3446ZM31.0758 5.3137C31.4661 5.70439 31.4659 6.33756 31.0752 6.72792L5.9568 31.8248C5.56611 32.2152 4.93295 32.2149 4.54259 31.8242C4.15223 31.4335 4.1525 30.8004 4.5432 30.41L29.6616 5.3131C30.0523 4.92274 30.6854 4.92301 31.0758 5.3137ZM26.4209 20.8507C26.4209 20.2984 25.9732 19.8507 25.4209 19.8507C24.8686 19.8507 24.4209 20.2984 24.4209 20.8507V25.1743H20.0928C19.5405 25.1743 19.0928 25.622 19.0928 26.1743C19.0928 26.7266 19.5405 27.1743 20.0928 27.1743H24.4209V31.4979C24.4209 32.0502 24.8686 32.4979 25.4209 32.4979C25.9732 32.4979 26.4209 32.0502 26.4209 31.4979V27.1743H30.7491C31.3013 27.1743 31.7491 26.7266 31.7491 26.1743C31.7491 25.622 31.3013 25.1743 30.7491 25.1743H26.4209V20.8507Z"
            fill="currentColor"
        />
    </s.Svg>
);