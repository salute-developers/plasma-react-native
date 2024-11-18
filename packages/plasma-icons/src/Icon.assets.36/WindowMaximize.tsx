import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WindowMaximize: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.5 11.5C5.5 8.18629 8.18629 5.5 11.5 5.5H24.5C27.8137 5.5 30.5 8.18629 30.5 11.5V24.5C30.5 27.8137 27.8137 30.5 24.5 30.5H11.5C8.18629 30.5 5.5 27.8137 5.5 24.5V11.5ZM7.5 13.5V24.5C7.5 26.7091 9.29086 28.5 11.5 28.5H24.5C26.7091 28.5 28.5 26.7091 28.5 24.5V13.5H7.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
