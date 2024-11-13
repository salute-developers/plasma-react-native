import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureDownOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.64645 6.59322C4.84171 6.39796 5.15829 6.39796 5.35355 6.59322L8 9.23967L10.6464 6.59322C10.8417 6.39796 11.1583 6.39796 11.3536 6.59322C11.5488 6.78849 11.5488 7.10507 11.3536 7.30033L8 10.6539L4.64645 7.30033C4.45118 7.10507 4.45118 6.78849 4.64645 6.59322Z"
            fill="currentColor"
        />
    </s.Svg>
);
