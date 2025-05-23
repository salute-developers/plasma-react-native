import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleRightOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14ZM1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8ZM6.39645 11.1464C6.20118 11.3417 6.20118 11.6583 6.39645 11.8536C6.59171 12.0488 6.90829 12.0488 7.10355 11.8536L10.6036 8.35355C10.7988 8.15829 10.7988 7.84171 10.6036 7.64645L7.10355 4.14645C6.90829 3.95119 6.59171 3.95119 6.39645 4.14645C6.20118 4.34171 6.20118 4.65829 6.39645 4.85355L9.54289 8L6.39645 11.1464Z"
            fill="currentColor"
        />
    </s.Svg>
);
