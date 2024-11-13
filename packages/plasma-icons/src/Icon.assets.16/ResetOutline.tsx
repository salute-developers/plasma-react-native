import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ResetOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.99821 1C5.45199 1 3.22425 2.35973 2 4.39133V2.94405C2 2.6679 1.77614 2.44405 1.5 2.44405C1.22386 2.44405 1 2.6679 1 2.94405V5.47113C1 5.74727 1.22386 5.97113 1.5 5.97113H1.99813C2.0057 5.9713 2.01326 5.9713 2.0208 5.97113H4.02708C4.30322 5.97113 4.52708 5.74727 4.52708 5.47113C4.52708 5.19498 4.30322 4.97113 4.02708 4.97113H2.81861C3.86002 3.19309 5.79024 2 7.99821 2C11.3109 2 13.9964 4.68549 13.9964 7.99821C13.9964 11.3109 11.3109 13.9964 7.99821 13.9964C5.51363 13.9964 3.38075 12.4857 2.47026 10.3307C2.36279 10.0763 2.06946 9.95724 1.81509 10.0647C1.56072 10.1722 1.44163 10.4655 1.54911 10.7199C2.61048 13.232 5.09771 14.9964 7.99821 14.9964C11.8632 14.9964 14.9964 11.8632 14.9964 7.99821C14.9964 4.1332 11.8632 1 7.99821 1ZM7.99779 9.40244C8.77376 9.40244 9.40281 8.77339 9.40281 7.99742C9.40281 7.22145 8.77376 6.59241 7.99779 6.59241C7.22182 6.59241 6.59277 7.22145 6.59277 7.99742C6.59277 8.77339 7.22182 9.40244 7.99779 9.40244Z"
            fill="currentColor"
        />
    </s.Svg>
);