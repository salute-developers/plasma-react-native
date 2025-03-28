import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChartDistributionFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.28985 2.8V14.25H9.7109V2.8C9.7109 2.2201 9.24081 1.75 8.66092 1.75H7.33983C6.75994 1.75 6.28985 2.2201 6.28985 2.8ZM11.079 5.57758V14.2498H14.5V5.57758C14.5 4.99768 14.0299 4.52758 13.45 4.52758H12.1289C11.549 4.52758 11.079 4.99768 11.079 5.57758ZM1.5 14.2494V7.66053C1.5 7.08063 1.97009 6.61053 2.54998 6.61053H3.87107C4.45096 6.61053 4.92105 7.08063 4.92105 7.66053V14.2494H1.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
