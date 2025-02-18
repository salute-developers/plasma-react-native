import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const InfoCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM19.5 12C19.5 12.8284 18.8284 13.5 18 13.5C17.1716 13.5 16.5 12.8284 16.5 12C16.5 11.1716 17.1716 10.5 18 10.5C18.8284 10.5 19.5 11.1716 19.5 12ZM18 15.375C18.6213 15.375 19.125 15.8787 19.125 16.5V25.5C19.125 26.1213 18.6213 26.625 18 26.625C17.3787 26.625 16.875 26.1213 16.875 25.5V16.5C16.875 15.8787 17.3787 15.375 18 15.375Z"
            fill="currentColor"
        />
    </s.Svg>
);
