import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Brightness0Outline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 12.5C14.9624 12.5 12.5 14.9624 12.5 18C12.5 21.0376 14.9624 23.5 18 23.5C21.0376 23.5 23.5 21.0376 23.5 18C23.5 14.9624 21.0376 12.5 18 12.5ZM10.5 18C10.5 13.8579 13.8579 10.5 18 10.5C22.1421 10.5 25.5 13.8579 25.5 18C25.5 22.1421 22.1421 25.5 18 25.5C13.8579 25.5 10.5 22.1421 10.5 18Z"
            fill="currentColor"
        />
    </s.Svg>
);
