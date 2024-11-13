import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WindowMaximize: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 7.5C3.5 5.29086 5.29086 3.5 7.5 3.5H16.5C18.7091 3.5 20.5 5.29086 20.5 7.5V16.5C20.5 18.7091 18.7091 20.5 16.5 20.5H7.5C5.29086 20.5 3.5 18.7091 3.5 16.5V7.5ZM5 9V16.5C5 17.8807 6.11929 19 7.5 19H16.5C17.8807 19 19 17.8807 19 16.5V9H5Z"
            fill="currentColor"
        />
    </s.Svg>
);
