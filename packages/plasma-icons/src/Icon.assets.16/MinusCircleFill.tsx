import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MinusCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM3.8 7.3C3.4134 7.3 3.1 7.6134 3.1 8C3.1 8.3866 3.4134 8.7 3.8 8.7H12.2C12.5866 8.7 12.9 8.3866 12.9 8C12.9 7.6134 12.5866 7.3 12.2 7.3H3.8Z"
            fill="currentColor"
        />
    </s.Svg>
);
