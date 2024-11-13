import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CircleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 5C10.8203 5 5 10.8203 5 18C5 25.1797 10.8203 31 18 31C25.1797 31 31 25.1797 31 18C31 10.8203 25.1797 5 18 5ZM3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18C33 26.2843 26.2843 33 18 33C9.71573 33 3 26.2843 3 18Z"
            fill="currentColor"
        />
    </s.Svg>
);
