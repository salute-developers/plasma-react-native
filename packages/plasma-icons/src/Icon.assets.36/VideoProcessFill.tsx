import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const VideoProcessFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM12.75 10.5C11.5074 10.5 10.5 11.5074 10.5 12.75V23.25C10.5 24.4926 11.5074 25.5 12.75 25.5H23.25C24.4926 25.5 25.5 24.4926 25.5 23.25V12.75C25.5 11.5074 24.4926 10.5 23.25 10.5H12.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
