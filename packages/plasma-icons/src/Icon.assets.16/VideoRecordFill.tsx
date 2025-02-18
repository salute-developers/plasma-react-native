import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoRecordFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 12.55C10.5129 12.55 12.55 10.5129 12.55 8C12.55 5.4871 10.5129 3.45 8 3.45C5.4871 3.45 3.45 5.4871 3.45 8C3.45 10.5129 5.4871 12.55 8 12.55Z"
            fill="currentColor"
        />
    </s.Svg>
);
