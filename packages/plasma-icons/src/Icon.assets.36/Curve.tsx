import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Curve: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.7546 8.01358C33.1872 8.35687 33.2596 8.98588 32.9163 9.41851L24.8955 19.5265C23.577 21.1881 21.1907 21.5315 19.4572 20.3093L15.7963 17.7282C14.9296 17.1171 13.7365 17.2888 13.0772 18.1196L5.05633 28.2275C4.71303 28.6602 4.08402 28.7326 3.65139 28.3893C3.21877 28.046 3.14635 27.417 3.48965 26.9844L11.5105 16.8764C12.829 15.2148 15.2152 14.8713 16.9488 16.0936L20.6096 18.6747C21.4764 19.2858 22.6695 19.1141 23.3288 18.2833L31.3497 8.17532C31.693 7.74269 32.322 7.67028 32.7546 8.01358Z"
            fill="currentColor"
        />
    </s.Svg>
);
