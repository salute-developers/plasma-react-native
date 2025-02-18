import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Line: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.4571 5.29289C31.8476 5.68342 31.8476 6.31658 31.4571 6.70711L6.70711 31.4571C6.31658 31.8476 5.68342 31.8476 5.29289 31.4571C4.90237 31.0666 4.90237 30.4334 5.29289 30.0429L30.0429 5.29289C30.4334 4.90237 31.0666 4.90237 31.4571 5.29289Z"
            fill="currentColor"
        />
    </s.Svg>
);
