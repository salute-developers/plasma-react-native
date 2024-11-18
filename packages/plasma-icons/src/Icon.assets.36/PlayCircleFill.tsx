import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlayCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM14.625 25.1447L25.875 18.6495C26.375 18.3608 26.375 17.6392 25.875 17.3505L14.625 10.8553C14.125 10.5666 13.5 10.9275 13.5 11.5048L13.5 24.4952C13.5 25.0725 14.125 25.4334 14.625 25.1447Z"
            fill="currentColor"
        />
    </s.Svg>
);
