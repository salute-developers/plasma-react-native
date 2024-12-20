import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureUpOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.4441 21.1605C25.0466 21.5438 24.4135 21.5323 24.0302 21.1348L18 14.8813L11.9698 21.1348C11.5865 21.5323 10.9534 21.5438 10.5559 21.1605C10.1583 20.7771 10.1468 20.1441 10.5302 19.7465L18 12L25.4698 19.7465C25.8532 20.1441 25.8417 20.7771 25.4441 21.1605Z"
            fill="currentColor"
        />
    </s.Svg>
);
