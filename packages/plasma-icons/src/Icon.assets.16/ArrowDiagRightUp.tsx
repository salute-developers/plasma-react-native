import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowDiagRightUp: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M11.2359 9.83878L11.2777 4.61151M11.2777 4.61151L6.28618 4.88903M11.2777 4.61151L4.73686 11.1524"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </s.Svg>
);
