import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureUpOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3536 9.38679C11.1583 9.58206 10.8417 9.58206 10.6464 9.38679L8 6.74035L5.35355 9.38679C5.15829 9.58206 4.84171 9.58206 4.64645 9.38679C4.45118 9.19153 4.45118 8.87495 4.64645 8.67969L8 5.32613L11.3536 8.67969C11.5488 8.87495 11.5488 9.19153 11.3536 9.38679Z"
            fill="currentColor"
        />
    </s.Svg>
);
