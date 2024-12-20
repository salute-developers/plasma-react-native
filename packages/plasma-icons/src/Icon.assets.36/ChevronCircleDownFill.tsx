import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleDownFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32ZM11.2408 14.4935C10.8503 14.1029 10.2172 14.1029 9.82664 14.4935C9.43611 14.884 9.43611 15.5171 9.82664 15.9077L17.2937 23.3747C17.6842 23.7653 18.3174 23.7653 18.7079 23.3747L26.175 15.9077C26.5655 15.5171 26.5655 14.884 26.175 14.4935C25.7844 14.1029 25.1513 14.1029 24.7608 14.4935L18.0008 21.2534L11.2408 14.4935Z"
            fill="currentColor"
        />
    </s.Svg>
);
