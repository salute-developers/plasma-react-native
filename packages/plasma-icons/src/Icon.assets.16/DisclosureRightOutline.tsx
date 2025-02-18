import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureRightOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.59375 11.354C6.39849 11.1588 6.39849 10.8422 6.59375 10.6469L9.2402 8.00049L6.59375 5.35404C6.39849 5.15878 6.39849 4.8422 6.59375 4.64693C6.78901 4.45167 7.10559 4.45167 7.30086 4.64693L10.6544 8.00049L7.30086 11.354C7.10559 11.5493 6.78901 11.5493 6.59375 11.354Z"
            fill="currentColor"
        />
    </s.Svg>
);
