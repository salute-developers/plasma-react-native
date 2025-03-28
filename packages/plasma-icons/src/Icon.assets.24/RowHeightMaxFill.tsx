import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RowHeightMaxFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M4 3.75C4 3.33579 4.33579 3 4.75 3H19.25C19.6642 3 20 3.33579 20 3.75C20 4.16421 19.6642 4.5 19.25 4.5H4.75C4.33579 4.5 4 4.16421 4 3.75Z"
            fill="currentColor"
        />
        <s.Path
            d="M3 8.5C3 7.11929 4.11929 6 5.5 6H18.5C19.8807 6 21 7.11929 21 8.5V15.5C21 16.8807 19.8807 18 18.5 18H5.5C4.11929 18 3 16.8807 3 15.5V8.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.75 19.5C4.33579 19.5 4 19.8358 4 20.25C4 20.6642 4.33579 21 4.75 21H19.25C19.6642 21 20 20.6642 20 20.25C20 19.8358 19.6642 19.5 19.25 19.5H4.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
