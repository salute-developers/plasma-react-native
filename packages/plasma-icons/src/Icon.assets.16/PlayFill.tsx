import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlayFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M12.925 7.09072C13.625 7.49487 13.625 8.50523 12.925 8.90937L5.575 13.1529C4.875 13.557 4 13.0519 4 12.2436L4 3.75652C4 2.94823 4.875 2.44305 5.575 2.8472L12.925 7.09072Z"
            fill="currentColor"
        />
    </s.Svg>
);
