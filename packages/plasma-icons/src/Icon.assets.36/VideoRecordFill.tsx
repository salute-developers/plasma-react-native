import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoRecordFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM18 27.75C23.3848 27.75 27.75 23.3848 27.75 18C27.75 12.6152 23.3848 8.25 18 8.25C12.6152 8.25 8.25 12.6152 8.25 18C8.25 23.3848 12.6152 27.75 18 27.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
