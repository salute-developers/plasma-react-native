import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Search: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.35 5.75C10.0481 5.75 5.75 10.0481 5.75 15.35C5.75 20.6519 10.0481 24.95 15.35 24.95C20.6519 24.95 24.95 20.6519 24.95 15.35C24.95 10.0481 20.6519 5.75 15.35 5.75ZM3.75 15.35C3.75 8.9435 8.9435 3.75 15.35 3.75C21.7565 3.75 26.95 8.9435 26.95 15.35C26.95 18.1932 25.9271 20.7975 24.2292 22.815L31.9571 30.5429C32.3476 30.9334 32.3476 31.5666 31.9571 31.9571C31.5666 32.3476 30.9334 32.3476 30.5429 31.9571L22.815 24.2292C20.7975 25.9271 18.1932 26.95 15.35 26.95C8.9435 26.95 3.75 21.7565 3.75 15.35Z"
            fill="currentColor"
        />
    </s.Svg>
);
