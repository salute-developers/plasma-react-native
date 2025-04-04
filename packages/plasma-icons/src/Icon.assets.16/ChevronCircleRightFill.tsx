import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleRightFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8ZM6.39645 11.1464C6.20118 11.3417 6.20118 11.6583 6.39645 11.8536C6.59171 12.0488 6.90829 12.0488 7.10355 11.8536L10.6036 8.35355C10.7988 8.15829 10.7988 7.84171 10.6036 7.64645L7.10355 4.14645C6.90829 3.95119 6.59171 3.95119 6.39645 4.14645C6.20118 4.34171 6.20118 4.65829 6.39645 4.85355L9.54289 8L6.39645 11.1464Z"
            fill="currentColor"
        />
    </s.Svg>
);
