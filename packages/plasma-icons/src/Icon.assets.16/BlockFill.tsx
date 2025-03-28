import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BlockFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M11.6939 10.9868L5.01318 4.30608C6.87866 2.79394 9.62318 2.90566 11.3588 4.64124C13.0943 6.37682 13.2061 9.12134 11.6939 10.9868Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.30608 5.01318L10.9868 11.6939C9.12134 13.2061 6.37682 13.0943 4.64124 11.3588C2.90566 9.62318 2.79394 6.87866 4.30608 5.01318Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM12.0659 3.93414C9.82035 1.68862 6.17965 1.68862 3.93414 3.93414C1.68862 6.17965 1.68862 9.82035 3.93414 12.0659C6.17965 14.3114 9.82035 14.3114 12.0659 12.0659C14.3114 9.82035 14.3114 6.17965 12.0659 3.93414Z"
            fill="currentColor"
        />
    </s.Svg>
);
