import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const KeyFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2497 5.55295C14.2497 7.79133 12.4619 9.6059 10.2566 9.6059C9.43503 9.6059 8.67141 9.35406 8.03658 8.92228C7.91515 8.83969 7.74346 8.92423 7.74346 9.07259L7.74346 10.6638C7.74346 10.7612 7.66569 10.8401 7.56976 10.8401H6.09025C5.99433 10.8401 5.91656 10.9191 5.91656 11.0164V12.2499C5.91656 12.3472 5.83879 12.4262 5.74286 12.4262L4.04752 12.4261C3.95159 12.4261 3.87382 12.505 3.87382 12.6024V14.3237C3.87382 14.4211 3.79606 14.5 3.70013 14.5L1.92369 14.5C1.82776 14.5 1.75 14.4211 1.75 14.3237L1.75011 11.3234C1.75011 11.2766 1.76841 11.2318 1.80098 11.1987L6.31472 6.61728C6.35794 6.5734 6.37498 6.50977 6.36152 6.44924C6.29739 6.16092 6.26354 5.86095 6.26354 5.55295C6.26354 3.31457 8.0513 1.5 10.2566 1.5C12.4619 1.5 14.2497 3.31457 14.2497 5.55295ZM11.1249 5.72954C11.7002 5.72954 12.1666 5.25617 12.1666 4.67225C12.1666 4.08832 11.7002 3.61495 11.1249 3.61495C10.5496 3.61495 10.0833 4.08832 10.0833 4.67225C10.0833 5.25617 10.5496 5.72954 11.1249 5.72954Z"
            fill="currentColor"
        />
    </s.Svg>
);
