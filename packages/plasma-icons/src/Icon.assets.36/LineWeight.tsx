import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LineWeight: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 10.5H33V6H3V10.5ZM33 18H3V15H33V18ZM3 24.75H33V22.5H3V24.75ZM3 30H33V28.5H3V30Z"
            fill="currentColor"
        />
    </s.Svg>
);
