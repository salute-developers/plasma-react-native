import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Battery20Outline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.8751 1.7C5.8751 1.3134 6.1885 1 6.5751 1H9.4251C9.8117 1 10.1251 1.3134 10.1251 1.7V2.42954C10.5048 2.45973 10.7848 2.52075 11.0269 2.64415C11.4484 2.8589 11.7911 3.20158 12.0059 3.62306C12.25 4.10222 12.25 4.72948 12.25 5.984V11.416C12.25 12.6705 12.25 13.2978 12.0059 13.7769C11.7911 14.1984 11.4484 14.5411 11.0269 14.7559C10.5478 15 9.92052 15 8.666 15H7.334C6.07948 15 5.45222 15 4.97306 14.7559C4.55158 14.5411 4.2089 14.1984 3.99415 13.7769C3.75 13.2978 3.75 12.6705 3.75 11.416V5.984C3.75 4.72948 3.75 4.10222 3.99415 3.62306C4.2089 3.20158 4.55158 2.8589 4.97306 2.64415C5.21527 2.52073 5.49532 2.4597 5.8751 2.42952V1.7ZM6.2123 3.4502C5.4391 3.4502 4.8123 4.077 4.8123 4.85019V12.5502C4.8123 13.3234 5.4391 13.9502 6.2123 13.9502H9.7873C10.5605 13.9502 11.1873 13.3234 11.1873 12.5502V4.85019C11.1873 4.077 10.5605 3.4502 9.7873 3.4502H6.2123ZM5.87083 13.25C5.67753 13.25 5.52083 13.0933 5.52083 12.9V12.55C5.52083 12.3567 5.67753 12.2 5.87083 12.2H10.1292C10.3225 12.2 10.4792 12.3567 10.4792 12.55V12.9C10.4792 13.0933 10.3225 13.25 10.1292 13.25H5.87083ZM5.52083 11.2901C5.52083 11.4834 5.67753 11.6401 5.87083 11.6401H10.1292C10.3225 11.6401 10.4792 11.4834 10.4792 11.2901V10.9401C10.4792 10.7468 10.3225 10.5901 10.1292 10.5901H5.87083C5.67753 10.5901 5.52083 10.7468 5.52083 10.9401V11.2901Z"
            fill="currentColor"
        />
    </s.Svg>
);