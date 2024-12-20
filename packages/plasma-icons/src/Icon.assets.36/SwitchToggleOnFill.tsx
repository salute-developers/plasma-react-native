import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwitchToggleOnFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 26C28.4183 26 32 22.4183 32 18C32 13.5817 28.4183 10 24 10H12C7.58172 10 4 13.5817 4 18C4 22.4183 7.58172 26 12 26H24ZM24 11.75C20.5482 11.75 17.75 14.5482 17.75 18C17.75 21.4518 20.5482 24.25 24 24.25C27.4518 24.25 30.25 21.4518 30.25 18C30.25 14.5482 27.4518 11.75 24 11.75Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.1056 25C19.0203 24.167 16.75 21.3486 16.75 18C16.75 14.6514 19.0203 11.833 22.1056 11H12C8.13401 11 5 14.134 5 18C5 21.866 8.13401 25 12 25H22.1056ZM33 18C33 22.9706 28.9706 27 24 27H12C7.02944 27 3 22.9706 3 18C3 13.0294 7.02944 9 12 9H24C28.9706 9 33 13.0294 33 18ZM24 23.25C26.8995 23.25 29.25 20.8995 29.25 18C29.25 15.1005 26.8995 12.75 24 12.75C21.1005 12.75 18.75 15.1005 18.75 18C18.75 20.8995 21.1005 23.25 24 23.25Z"
            fill="currentColor"
        />
    </s.Svg>
);
