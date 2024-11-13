import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WindowMinimize: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.5 19.5C5.5 18.9477 5.94772 18.5 6.5 18.5H17.5C18.0523 18.5 18.5 18.9477 18.5 19.5C18.5 20.0523 18.0523 20.5 17.5 20.5H6.5C5.94772 20.5 5.5 20.0523 5.5 19.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
