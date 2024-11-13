import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronRight: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.37887 12.8718C5.17384 12.6668 5.17384 12.3344 5.37887 12.1294L9.50764 8.00059L5.37887 3.87182C5.17384 3.66679 5.17384 3.33438 5.37887 3.12936C5.58389 2.92433 5.9163 2.92433 6.12133 3.12936L10.6213 7.62935C10.8264 7.83438 10.8264 8.16679 10.6213 8.37182L6.12133 12.8718C5.9163 13.0768 5.58389 13.0768 5.37887 12.8718Z"
            fill="currentColor"
        />
    </s.Svg>
);
