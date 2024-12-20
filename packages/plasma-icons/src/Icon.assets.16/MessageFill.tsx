import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MessageFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.15267 7.94856C2.15267 4.69087 4.79355 2.04999 8.05124 2.04999C11.3089 2.04999 13.9498 4.69087 13.9498 7.94856C13.9498 11.2062 11.3089 13.8471 8.05124 13.8471C7.35037 13.8471 6.67709 13.7247 6.05228 13.4997C5.67723 13.3646 5.30884 13.3257 4.9846 13.4165L3.20302 13.9153C2.52159 14.1061 1.89367 13.4782 2.08448 12.7968L2.58332 11.0152C2.67411 10.691 2.63521 10.3226 2.50013 9.94751C2.2751 9.3227 2.15267 8.64943 2.15267 7.94856Z"
            fill="currentColor"
        />
    </s.Svg>
);
