import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const StarFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.34097 1.65696C7.61557 1.11435 8.38443 1.11435 8.65903 1.65696L10.4609 5.21739L14.3756 5.84523C14.9722 5.94092 15.2098 6.67829 14.7829 7.10933L11.9818 9.93764L12.5993 13.8861C12.6935 14.4879 12.0714 14.9436 11.533 14.6674L8 12.8549L4.46699 14.6674C3.92855 14.9436 3.30654 14.4879 3.40066 13.8861L4.01824 9.93764L1.21714 7.10933C0.790247 6.6783 1.02783 5.94092 1.62444 5.84523L5.53914 5.21739L7.34097 1.65696Z"
            fill="currentColor"
        />
    </s.Svg>
);
