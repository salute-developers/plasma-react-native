import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureRightOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8397 25.4441C14.4564 25.0466 14.4679 24.4135 14.8654 24.0302L21.1189 18L14.8654 11.9698C14.4679 11.5865 14.4564 10.9534 14.8397 10.5559C15.2231 10.1583 15.8561 10.1468 16.2537 10.5302L24.0002 18L16.2537 25.4698C15.8561 25.8532 15.2231 25.8417 14.8397 25.4441Z"
            fill="currentColor"
        />
    </s.Svg>
);
