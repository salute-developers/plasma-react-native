import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WindowMinimize: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 28.5C8 27.6716 8.67157 27 9.5 27H26.5C27.3284 27 28 27.6716 28 28.5C28 29.3284 27.3284 30 26.5 30H9.5C8.67157 30 8 29.3284 8 28.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
