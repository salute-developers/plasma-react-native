import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChartDistributionOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.13203 2.74998C6.82827 2.74998 6.58203 2.99622 6.58203 3.29997V7.10899C6.58231 7.11589 6.58246 7.12283 6.58246 7.1298V13.2538H9.41406V5.03901C9.41406 5.03203 9.41421 5.02509 9.41449 5.01819V3.29997C9.41449 2.99622 9.16824 2.74998 8.86449 2.74998H7.13203ZM6.05766 14.2532C6.06573 14.2536 6.07386 14.2538 6.08203 14.2538H9.89917L9.91406 14.254H13.7465C14.0227 14.254 14.2465 14.0301 14.2465 13.754V6.08899C14.2465 5.23296 13.5526 4.53901 12.6965 4.53901H10.4145V3.29997C10.4145 2.44395 9.72053 1.75 8.86449 1.75H7.13203C6.27599 1.75 5.58203 2.44395 5.58203 3.29997V6.62981H3.3C2.44396 6.62981 1.75 7.32376 1.75 8.17978V13.7532C1.75 14.0293 1.97386 14.2532 2.25 14.2532H6.05766ZM5.58203 7.62979V13.2532H2.75V8.17978C2.75 7.87603 2.99624 7.62979 3.3 7.62979H5.58203ZM13.2465 13.254H10.4145V5.539H12.6965C13.0003 5.539 13.2465 5.78524 13.2465 6.08899V13.254Z"
            fill="currentColor"
        />
    </s.Svg>
);