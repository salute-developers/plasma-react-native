import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const AttentionCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM18 10.5C18.8284 10.5 19.5 11.1716 19.5 12V18C19.5 18.8284 18.8284 19.5 18 19.5C17.1716 19.5 16.5 18.8284 16.5 18V12C16.5 11.1716 17.1716 10.5 18 10.5ZM19.5 24C19.5 24.8284 18.8284 25.5 18 25.5C17.1716 25.5 16.5 24.8284 16.5 24C16.5 23.1716 17.1716 22.5 18 22.5C18.8284 22.5 19.5 23.1716 19.5 24Z"
            fill="currentColor"
        />
    </s.Svg>
);
