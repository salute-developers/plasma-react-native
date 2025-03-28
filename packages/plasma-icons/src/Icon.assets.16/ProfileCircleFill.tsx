import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ProfileCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM10.45 6.6C10.45 7.9531 9.3531 9.05 8 9.05C6.6469 9.05 5.55 7.9531 5.55 6.6C5.55 5.2469 6.6469 4.15 8 4.15C9.3531 4.15 10.45 5.2469 10.45 6.6ZM12.5115 11.8794C11.5185 10.7778 9.83735 10.1 8 10.1C6.16265 10.1 4.48155 10.7778 3.48847 11.8794C4.57964 13.1472 6.19607 13.95 8 13.95C9.80393 13.95 11.4204 13.1472 12.5115 11.8794Z"
            fill="currentColor"
        />
    </s.Svg>
);
