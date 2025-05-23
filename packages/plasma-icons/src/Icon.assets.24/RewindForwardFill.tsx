import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RewindForwardFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M21.0295 10.2521C21.9908 10.8363 21.9908 12.2316 21.0295 12.8158L13.3052 17.5101C12.3056 18.1176 11.0262 17.398 11.0262 16.2283V6.83963C11.0262 5.66989 12.3056 4.95029 13.3052 5.55779L21.0295 10.2521Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.63868 14.839V8.15392L5.30521 5.5203C4.30559 4.9128 3.02618 5.6324 3.02618 6.80215L3.02618 16.1908C3.02618 17.3605 4.30559 18.0801 5.30521 17.4726L9.63868 14.839Z"
            fill="currentColor"
        />
    </s.Svg>
);
