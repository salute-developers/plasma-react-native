import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PowerWireOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4277 4C14.4277 3.44772 13.98 3 13.4277 3C12.8754 3 12.4277 3.44772 12.4277 4V10.2867H11.5C10.1193 10.2867 9 11.406 9 12.7867V18.1276C9 20.1627 9.88567 22.0971 11.4263 23.4268L14.159 25.7853C14.269 25.8803 14.3323 26.0185 14.3323 26.1638V32.9969H21.6646V26.1638C21.6646 26.0185 21.7278 25.8803 21.8379 25.7853L24.5706 23.4268C26.1112 22.0971 26.9969 20.1627 26.9969 18.1276V12.7867C26.9969 11.406 25.8776 10.2867 24.4969 10.2867H23.5688V4C23.5688 3.44772 23.1211 3 22.5688 3C22.0165 3 21.5688 3.44772 21.5688 4V10.2867H14.4277V4ZM11 12.7867C11 12.5106 11.2239 12.2867 11.5 12.2867H24.4969C24.773 12.2867 24.9969 12.5106 24.9969 12.7867V18.1276C24.9969 19.5812 24.3642 20.9629 23.2638 21.9127L20.5311 24.2713C19.9809 24.7462 19.6646 25.437 19.6646 26.1638V30.9969H16.3323V26.1638C16.3323 25.437 16.016 24.7462 15.4658 24.2713L12.7331 21.9127C11.6326 20.9629 11 19.5812 11 18.1276V12.7867Z"
            fill="currentColor"
        />
    </s.Svg>
);