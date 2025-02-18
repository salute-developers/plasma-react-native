import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PinFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.9394 1.00002C5.43226 1.00002 5.04543 1.48162 5.12555 2.01326L5.61222 5.24243C5.66211 5.57345 5.58204 5.91172 5.39067 6.17837L3.98816 8.13261C3.40946 8.93897 3.95111 10.1 4.906 10.1L7.31773 10.1V13.9504L7.99996 15.0004L8.68219 13.9504V10.1L11.094 10.1C12.0489 10.1 12.5905 8.93895 12.0118 8.1326L10.6093 6.17836C10.418 5.9117 10.3379 5.57344 10.3878 5.24242L10.8745 2.01324C10.9546 1.48161 10.5677 1 10.0606 1L5.9394 1.00002Z"
            fill="currentColor"
        />
    </s.Svg>
);
