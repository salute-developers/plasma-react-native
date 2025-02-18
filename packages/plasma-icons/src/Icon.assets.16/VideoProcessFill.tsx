import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoProcessFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM5.55 4.5C4.9701 4.5 4.5 4.9701 4.5 5.55V10.45C4.5 11.0299 4.9701 11.5 5.55 11.5H10.45C11.0299 11.5 11.5 11.0299 11.5 10.45V5.55C11.5 4.9701 11.0299 4.5 10.45 4.5H5.55Z"
            fill="currentColor"
        />
    </s.Svg>
);
