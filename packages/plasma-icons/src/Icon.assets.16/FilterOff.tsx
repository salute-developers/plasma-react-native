import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const FilterOff: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M14.2325 2.35355C14.4277 2.15829 14.4277 1.84171 14.2325 1.64645C14.0372 1.45118 13.7206 1.45118 13.5254 1.64645L11.1719 3.99992H2C1.72386 3.99992 1.5 4.22378 1.5 4.49992C1.5 4.77607 1.72386 4.99992 2 4.99992H10.1719L7.67187 7.49992H4C3.72386 7.49992 3.5 7.72378 3.5 7.99992C3.5 8.27607 3.72386 8.49992 4 8.49992H6.67187L1.64596 13.5258C1.4507 13.7211 1.4507 14.0377 1.64596 14.2329C1.84122 14.4282 2.1578 14.4282 2.35306 14.2329L14.2325 2.35355Z"
            fill="currentColor"
        />
        <s.Path
            d="M10.4952 7.49992L9.49519 8.49992H12C12.2761 8.49992 12.5 8.27607 12.5 7.99992C12.5 7.72378 12.2761 7.49992 12 7.49992H10.4952Z"
            fill="currentColor"
        />
        <s.Path
            d="M6.99519 10.9999L5.99521 11.9999L6 11.9999H10C10.2761 11.9999 10.5 11.7761 10.5 11.4999C10.5 11.2238 10.2761 10.9999 10 10.9999H6.99519Z"
            fill="currentColor"
        />
        <s.Path
            d="M13.9952 3.99992L12.9952 4.99992H14C14.2761 4.99992 14.5 4.77607 14.5 4.49992C14.5 4.22378 14.2761 3.99992 14 3.99992H13.9952Z"
            fill="currentColor"
        />
    </s.Svg>
);
