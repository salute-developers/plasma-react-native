import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlayCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.675 8.30311C11.9083 8.1684 11.9083 7.83161 11.675 7.69689L6.425 4.66581C6.19166 4.53109 5.9 4.69948 5.9 4.96891L5.9 11.0311C5.9 11.3005 6.19166 11.4689 6.425 11.3342L11.675 8.30311Z"
            fill="currentColor"
        />
    </s.Svg>
);
