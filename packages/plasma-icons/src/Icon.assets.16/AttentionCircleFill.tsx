import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const AttentionCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 4.5C8.3866 4.5 8.7 4.8134 8.7 5.2V8C8.7 8.3866 8.3866 8.7 8 8.7C7.6134 8.7 7.3 8.3866 7.3 8V5.2C7.3 4.8134 7.6134 4.5 8 4.5ZM8.7 10.8C8.7 11.1866 8.3866 11.5 8 11.5C7.6134 11.5 7.3 11.1866 7.3 10.8C7.3 10.4134 7.6134 10.1 8 10.1C8.3866 10.1 8.7 10.4134 8.7 10.8Z"
            fill="currentColor"
        />
    </s.Svg>
);
