import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PcMouseFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 3C12.201 3 7.5 7.70101 7.5 13.5V22.5C7.5 28.299 12.201 33 18 33C23.799 33 28.5 28.299 28.5 22.5V13.5C28.5 7.70101 23.799 3 18 3ZM19 9C19 8.44772 18.5523 8 18 8C17.4477 8 17 8.44772 17 9V15C17 15.5523 17.4477 16 18 16C18.5523 16 19 15.5523 19 15V9Z"
            fill="currentColor"
        />
    </s.Svg>
);
