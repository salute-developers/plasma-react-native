import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WasherFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M8.25 13.25C8.25 11.1789 9.92893 9.5 12 9.5C14.0711 9.5 15.75 11.1789 15.75 13.25C15.75 13.3513 15.746 13.4517 15.7381 13.551C15.2304 13.7829 14.7454 14 14 14C13 14 12.5 13.75 12 13.5C11.5 13.25 11 13 9.99996 13C9.1665 13 8.68037 13.1737 8.25209 13.3762C8.2507 13.3343 8.25 13.2922 8.25 13.25Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 2C4.45507 2 3 3.45508 3 5.25V18.75C3 20.5449 4.45508 22 6.25 22H17.75C19.5449 22 21 20.5449 21 18.75V5.25C21 3.45507 19.5449 2 17.75 2H6.25ZM7 7C7.55228 7 8 6.55228 8 6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6C6 6.55228 6.44772 7 7 7ZM12.75 5.25C12.3358 5.25 12 5.58579 12 6C12 6.41421 12.3358 6.75 12.75 6.75H17.25C17.6642 6.75 18 6.41421 18 6C18 5.58579 17.6642 5.25 17.25 5.25H12.75ZM6.79448 13.9365C6.76514 13.7118 6.75 13.4827 6.75 13.25C6.75 10.3505 9.1005 8 12 8C14.8995 8 17.25 10.3505 17.25 13.25C17.25 16.1495 14.8995 18.5 12 18.5C9.33318 18.5 7.13077 16.5116 6.79448 13.9365Z"
            fill="currentColor"
        />
    </s.Svg>
);
