import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RewindForwardFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4707 7.08794C15.1767 7.49093 15.1767 8.5088 14.4707 8.91179L8.86723 12.1104C8.16726 12.51 7.29673 12.0045 7.29673 11.1985V4.80121C7.29673 3.99519 8.16725 3.48972 8.86723 3.88929L14.4707 7.08794ZM6.29299 10.2719V5.72782L3.07221 3.88929C2.37223 3.48972 1.50171 3.99519 1.50171 4.80121V11.1985C1.50171 12.0045 2.37223 12.51 3.07221 12.1104L6.29299 10.2719Z"
            fill="currentColor"
        />
    </s.Svg>
);
