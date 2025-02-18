import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlusCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM19.5 9C19.5 8.17157 18.8284 7.5 18 7.5C17.1716 7.5 16.5 8.17157 16.5 9V16.5H9C8.17157 16.5 7.5 17.1716 7.5 18C7.5 18.8284 8.17157 19.5 9 19.5H16.5V27C16.5 27.8284 17.1716 28.5 18 28.5C18.8284 28.5 19.5 27.8284 19.5 27V19.5H27C27.8284 19.5 28.5 18.8284 28.5 18C28.5 17.1716 27.8284 16.5 27 16.5H19.5V9Z"
            fill="currentColor"
        />
    </s.Svg>
);
