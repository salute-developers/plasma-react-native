import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SendOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.7167 8.45089C14.8899 8.36761 15.0001 8.19245 15.0001 8.00027C15.0001 7.8081 14.8899 7.63293 14.7167 7.54966L1.71791 1.2994C1.5282 1.20818 1.30169 1.24555 1.15133 1.39285C1.00097 1.54016 0.958967 1.76586 1.04627 1.9574L3.8008 8.00027L1.04627 14.0431C0.958966 14.2347 1.00097 14.4604 1.15133 14.6077C1.30169 14.755 1.5282 14.7924 1.71791 14.7011L14.7167 8.45089ZM4.4026 6.90955L2.52886 2.79892L13.3462 8.00027L2.52886 13.2016L4.4026 9.091L6.78123 8.16331C6.92978 8.10538 6.92978 7.89517 6.78123 7.83724L4.4026 6.90955Z"
            fill="currentColor"
        />
    </s.Svg>
);
