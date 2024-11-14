import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const AddFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.69797 3.25C3.69797 2.2835 4.48147 1.5 5.44797 1.5H12.7515C13.718 1.5 14.5015 2.2835 14.5015 3.25V10.4876C14.5015 11.4541 13.718 12.2376 12.7515 12.2376H5.44797C4.48147 12.2376 3.69797 11.4541 3.69797 10.4876V3.25ZM9.09905 3.68351C9.37519 3.68351 9.59905 3.90737 9.59905 4.18351V6.36792H11.7999C12.0761 6.36792 12.2999 6.59178 12.2999 6.86792C12.2999 7.14407 12.0761 7.36792 11.7999 7.36792H9.6058L9.63501 9.54563C9.63872 9.82175 9.41788 10.0486 9.14177 10.0523C8.86565 10.056 8.63881 9.83516 8.6351 9.55904L8.60571 7.36792H6.39817C6.12202 7.36792 5.89817 7.14407 5.89817 6.86792C5.89817 6.59178 6.12202 6.36792 6.39817 6.36792H8.59905V4.18351C8.59905 3.90737 8.8229 3.68351 9.09905 3.68351Z"
            fill="currentColor"
        />
        <s.Path
            d="M2.5 5.41135C2.5 5.13521 2.27614 4.91135 2 4.91135C1.72386 4.91135 1.5 5.13521 1.5 5.41135V12.2515C1.5 13.4941 2.50736 14.5015 3.75 14.5015H10.6428C10.919 14.5015 11.1428 14.2776 11.1428 14.0015C11.1428 13.7253 10.919 13.5015 10.6428 13.5015H3.75C3.05964 13.5015 2.5 12.9418 2.5 12.2515V5.41135Z"
            fill="currentColor"
        />
    </s.Svg>
);