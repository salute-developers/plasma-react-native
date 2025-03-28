import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BlockOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.12491 3.41781L12.5786 11.8715C14.576 9.51482 14.463 5.98022 12.2396 3.75683C10.0162 1.53345 6.48159 1.42044 4.12491 3.41781ZM11.8715 12.5786L3.41781 4.12491C1.42044 6.48159 1.53345 10.0162 3.75683 12.2396C5.98022 14.463 9.51482 14.576 11.8715 12.5786ZM3.04973 3.04973C5.7827 0.316757 10.2137 0.316757 12.9467 3.04973C15.6797 5.7827 15.6797 10.2137 12.9467 12.9467C10.2137 15.6797 5.7827 15.6797 3.04973 12.9467C0.316757 10.2137 0.316757 5.7827 3.04973 3.04973Z"
            fill="currentColor"
        />
    </s.Svg>
);
