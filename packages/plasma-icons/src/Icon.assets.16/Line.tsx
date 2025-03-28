import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Line: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.8538 2.14645C14.049 2.34171 14.049 2.65829 13.8538 2.85355L2.54008 14.1673C2.34481 14.3625 2.02823 14.3625 1.83297 14.1673C1.63771 13.972 1.63771 13.6554 1.83297 13.4602L13.1467 2.14645C13.3419 1.95118 13.6585 1.95118 13.8538 2.14645Z"
            fill="currentColor"
        />
    </s.Svg>
);
