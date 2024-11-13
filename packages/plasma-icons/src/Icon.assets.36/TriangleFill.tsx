import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TriangleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 4.5C18.4042 4.5 18.7776 4.71561 18.9797 5.06562L33.3484 29.953C33.5505 30.303 33.5505 30.7343 33.3484 31.0843C33.1464 31.4343 32.7729 31.6499 32.3688 31.6499H3.63125C3.22709 31.6499 2.85364 31.4343 2.65156 31.0843C2.44948 30.7343 2.44948 30.303 2.65156 29.953L17.0203 5.06562C17.2224 4.71561 17.5958 4.5 18 4.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
