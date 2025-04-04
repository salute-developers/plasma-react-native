import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LocationPinFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 3C11.3726 3 6 8.37258 6 15C6 19.5256 8.55236 23.72 11.1347 26.8283C13.7421 29.9668 16.5352 32.1826 17.325 32.775C17.725 33.075 18.275 33.075 18.675 32.775C19.4648 32.1826 22.2579 29.9668 24.8653 26.8283C27.4476 23.72 30 19.5256 30 15C30 8.37258 24.6274 3 18 3ZM18 20.25C20.8995 20.25 23.25 17.8995 23.25 15C23.25 12.1005 20.8995 9.75 18 9.75C15.1005 9.75 12.75 12.1005 12.75 15C12.75 17.8995 15.1005 20.25 18 20.25Z"
            fill="currentColor"
        />
    </s.Svg>
);
