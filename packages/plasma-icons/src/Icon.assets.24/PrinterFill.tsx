import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PrinterFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 3.5C5.72386 3.5 5.5 3.72386 5.5 4V7C3.567 7 2 8.567 2 10.5V16C2 16.5523 2.44772 17 3 17H5.5V20C5.5 20.2761 5.72386 20.5 6 20.5H18C18.2761 20.5 18.5 20.2761 18.5 20V17H21C21.5523 17 22 16.5523 22 16V10.5C22 8.567 20.433 7 18.5 7V4C18.5 3.72386 18.2761 3.5 18 3.5H6ZM18.5 11C18.5 11.5523 18.0523 12 17.5 12C16.9477 12 16.5 11.5523 16.5 11C16.5 10.4477 16.9477 10 17.5 10C18.0523 10 18.5 10.4477 18.5 11ZM17 5H7V7H17V5ZM7 19H17V15H7V19Z"
            fill="currentColor"
        />
    </s.Svg>
);
