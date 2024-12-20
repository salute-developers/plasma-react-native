import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureLeftOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.1605 10.5559C21.5438 10.9534 21.5323 11.5865 21.1348 11.9698L14.8813 18L21.1348 24.0302C21.5323 24.4135 21.5438 25.0466 21.1605 25.4441C20.7771 25.8417 20.1441 25.8532 19.7465 25.4698L12 18L19.7465 10.5302C20.1441 10.1468 20.7771 10.1583 21.1605 10.5559Z"
            fill="currentColor"
        />
    </s.Svg>
);
