import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TriangleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.0001 4C18.3574 4 18.6875 4.1906 18.8661 4.5L33.1556 29.25C33.3342 29.5594 33.3342 29.9406 33.1556 30.25C32.9769 30.5594 32.6468 30.75 32.2895 30.75H3.71069C3.35343 30.75 3.0233 30.5594 2.84467 30.25C2.66604 29.9406 2.66604 29.5594 2.84467 29.25L17.1341 4.5C17.3127 4.1906 17.6428 4 18.0001 4ZM5.44274 28.75H30.5575L18.0001 7L5.44274 28.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
