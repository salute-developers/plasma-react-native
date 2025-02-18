import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MinusCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM9 16.5C8.17157 16.5 7.5 17.1716 7.5 18C7.5 18.8284 8.17157 19.5 9 19.5H27C27.8284 19.5 28.5 18.8284 28.5 18C28.5 17.1716 27.8284 16.5 27 16.5H9Z"
            fill="currentColor"
        />
    </s.Svg>
);
