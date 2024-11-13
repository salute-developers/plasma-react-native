import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Attention: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M19.5 6C19.5 5.17157 18.8284 4.5 18 4.5C17.1716 4.5 16.5 5.17157 16.5 6V21.5C16.5 22.3284 17.1716 23 18 23C18.8284 23 19.5 22.3284 19.5 21.5V6Z"
            fill="currentColor"
        />
        <s.Path
            d="M18 30C18.8284 30 19.5 29.3284 19.5 28.5C19.5 27.6716 18.8284 27 18 27C17.1716 27 16.5 27.6716 16.5 28.5C16.5 29.3284 17.1716 30 18 30Z"
            fill="currentColor"
        />
    </s.Svg>
);
