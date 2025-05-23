import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoubleDisclosureRight: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.49996 11.5072C4.3047 11.312 4.3047 10.9954 4.49996 10.8001L7.29641 8.00368L4.49996 5.20723C4.3047 5.01197 4.3047 4.69539 4.49996 4.50013C4.69523 4.30487 5.01181 4.30487 5.20707 4.50013L8.71062 8.00368L5.20707 11.5072C5.01181 11.7025 4.69523 11.7025 4.49996 11.5072Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99996 11.5037C7.8047 11.3084 7.8047 10.9918 7.99996 10.7965L10.7964 8.0001L7.99996 5.20365C7.8047 5.00839 7.8047 4.69181 7.99996 4.49654C8.19523 4.30128 8.51181 4.30128 8.70707 4.49654L12.2106 8.0001L8.70707 11.5037C8.51181 11.6989 8.19523 11.6989 7.99996 11.5037Z"
            fill="currentColor"
        />
    </s.Svg>
);
