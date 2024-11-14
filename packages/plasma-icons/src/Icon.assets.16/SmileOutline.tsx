import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SmileOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.00183 8.00001C2.00183 4.68729 4.68732 2.0018 8.00004 2.0018C11.3128 2.0018 13.9982 4.68729 13.9982 8.00001C13.9982 11.3127 11.3128 13.9982 8.00004 13.9982C4.68732 13.9982 2.00183 11.3127 2.00183 8.00001ZM8.00004 1.0018C4.13504 1.0018 1.00183 4.13501 1.00183 8.00001C1.00183 11.865 4.13504 14.9982 8.00004 14.9982C11.865 14.9982 14.9982 11.865 14.9982 8.00001C14.9982 4.13501 11.865 1.0018 8.00004 1.0018ZM5.7159 7.29789C6.20089 7.29789 6.59404 6.90474 6.59404 6.41976C6.59404 5.93477 6.20089 5.54162 5.7159 5.54162C5.23092 5.54162 4.83777 5.93477 4.83777 6.41976C4.83777 6.90474 5.23092 7.29789 5.7159 7.29789ZM11.1604 6.41976C11.1604 6.90474 10.7673 7.29789 10.2823 7.29789C9.79733 7.29789 9.40417 6.90474 9.40417 6.41976C9.40417 5.93477 9.79733 5.54162 10.2823 5.54162C10.7673 5.54162 11.1604 5.93477 11.1604 6.41976ZM5.38981 9.50589C5.25174 9.26674 4.94594 9.1848 4.7068 9.32288C4.46765 9.46095 4.38571 9.76674 4.52379 10.0059C4.87596 10.6159 5.38249 11.1224 5.99248 11.4746C6.60246 11.8268 7.2944 12.0122 7.99875 12.0122C8.7031 12.0122 9.39504 11.8268 10.005 11.4746C10.615 11.1224 11.1215 10.6159 11.4737 10.0059C11.6118 9.76674 11.5299 9.46095 11.2907 9.32288C11.0516 9.1848 10.7458 9.26674 10.6077 9.50589C10.3433 9.96385 9.96299 10.3442 9.50502 10.6086C9.04706 10.873 8.52756 11.0122 7.99875 11.0122C7.46994 11.0122 6.95044 10.873 6.49248 10.6086C6.03451 10.3442 5.65422 9.96385 5.38981 9.50589Z"
            fill="currentColor"
        />
    </s.Svg>
);