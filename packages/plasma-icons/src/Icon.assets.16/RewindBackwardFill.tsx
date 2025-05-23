import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RewindBackwardFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.52923 7.08794C0.823265 7.49093 0.823263 8.5088 1.52923 8.91179L7.13274 12.1104C7.83272 12.51 8.70325 12.0045 8.70325 11.1985V4.80121C8.70325 3.99519 7.83272 3.48972 7.13274 3.88929L1.52923 7.08794ZM9.70691 10.2719V5.72782L12.9277 3.88929C13.6277 3.48972 14.4982 3.99519 14.4982 4.80121V11.1985C14.4982 12.0045 13.6277 12.51 12.9277 12.1104L9.70691 10.2719Z"
            fill="currentColor"
        />
    </s.Svg>
);
