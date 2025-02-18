import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoubleDisclosureLeft: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5002 11.5072C11.6955 11.3119 11.6955 10.9953 11.5002 10.8001L8.70376 8.00363L11.5002 5.20718C11.6955 5.01192 11.6955 4.69534 11.5002 4.50007C11.3049 4.30481 10.9884 4.30481 10.7931 4.50007L7.28955 8.00363L10.7931 11.5072C10.9884 11.7024 11.3049 11.7024 11.5002 11.5072Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00021 11.5037C8.19547 11.3084 8.19547 10.9918 8.00021 10.7965L5.20376 8.0001L8.00021 5.20365C8.19547 5.00839 8.19547 4.69181 8.00021 4.49654C7.80495 4.30128 7.48837 4.30128 7.2931 4.49654L3.78955 8.0001L7.2931 11.5037C7.48837 11.6989 7.80495 11.6989 8.00021 11.5037Z"
            fill="currentColor"
        />
    </s.Svg>
);
