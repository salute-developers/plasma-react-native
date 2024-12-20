import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HeadphonesFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M8 2.05C4.71391 2.05 2.05 4.71391 2.05 8V8.70764C2.4036 8.48125 2.82398 8.35 3.275 8.35C4.53145 8.35 5.55 9.36855 5.55 10.625V12.725C5.55 13.9815 4.53145 15 3.275 15C2.01855 15 1 13.9814 1 12.725V8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8L15 12.725C15 13.9815 13.9814 15 12.725 15C11.4686 15 10.45 13.9814 10.45 12.725V10.625C10.45 9.36855 11.4686 8.35 12.725 8.35C13.176 8.35 13.5964 8.48125 13.95 8.70764V8C13.95 4.71391 11.2861 2.05 8 2.05Z"
            fill="currentColor"
        />
    </s.Svg>
);
