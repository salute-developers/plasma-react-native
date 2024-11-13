import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Contrast0Outline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 12.625V23.375C20.9685 23.375 23.375 20.9685 23.375 18C23.375 15.0315 20.9685 12.625 18 12.625ZM18 10.625C13.9269 10.625 10.625 13.9269 10.625 18C10.625 22.0731 13.9269 25.375 18 25.375C22.0731 25.375 25.375 22.0731 25.375 18C25.375 13.9269 22.0731 10.625 18 10.625Z"
            fill="currentColor"
        />
    </s.Svg>
);
