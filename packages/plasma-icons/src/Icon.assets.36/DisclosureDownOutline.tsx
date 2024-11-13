import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureDownOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5559 14.8388C10.9534 14.4554 11.5865 14.4669 11.9698 14.8645L18 21.2535L24.0302 15C24.4135 14.6024 25.0466 14.4554 25.4441 14.8388C25.8417 15.2221 25.8532 15.8552 25.4698 16.2527L18 23.9992L10.5302 16.2527C10.1468 15.8552 10.1583 15.2221 10.5559 14.8388Z"
            fill="currentColor"
        />
    </s.Svg>
);
