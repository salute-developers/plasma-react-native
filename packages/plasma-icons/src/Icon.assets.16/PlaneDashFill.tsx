import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlaneDashFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.57217 1.5C6.16806 1.5 5.86694 1.87275 5.9519 2.26783L6.93084 6.82032L4.36192 6.89951L3.78259 6.31017C3.51938 6.04241 3.15965 5.8916 2.78419 5.8916H1.92522C1.79565 5.8916 1.71101 6.02751 1.76817 6.1438L2.68036 7.99971L1.76817 9.8562C1.71101 9.97249 1.79565 10.1084 1.92522 10.1084H2.78419C3.15965 10.1084 3.51938 9.95759 3.78259 9.68983L4.36167 9.10075L6.93079 9.17994L6.74391 10.049L10.0693 6.72357L7.69692 2.18151C7.47816 1.76262 7.04474 1.5 6.57217 1.5ZM11.5285 6.67859L6.3565 11.8506L5.9519 13.7322C5.86694 14.1272 6.16806 14.5 6.57217 14.5C7.04474 14.5 7.47816 14.2374 7.69692 13.8185L10.0688 9.27668L12.8442 9.36223C13.6129 9.38593 14.2489 8.76921 14.2489 8.00013C14.2489 7.23105 13.6129 6.61433 12.8442 6.63803L11.5285 6.67859Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4453 1.64645C14.6406 1.84171 14.6406 2.15829 14.4453 2.35355L2.56596 14.2329C2.37069 14.4282 2.05411 14.4282 1.85885 14.2329C1.66359 14.0377 1.66359 13.7211 1.85885 13.5258L13.7382 1.64645C13.9335 1.45118 14.2501 1.45118 14.4453 1.64645Z"
            fill="currentColor"
        />
    </s.Svg>
);
