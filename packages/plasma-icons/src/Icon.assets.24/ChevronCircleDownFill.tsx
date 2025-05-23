import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronCircleDownFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM7.53033 9.46967C7.23744 9.17678 6.76256 9.17678 6.46967 9.46967C6.17678 9.76256 6.17678 10.2374 6.46967 10.5303L11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L17.5303 10.5303C17.8232 10.2374 17.8232 9.76256 17.5303 9.46967C17.2374 9.17678 16.7626 9.17678 16.4697 9.46967L12 13.9393L7.53033 9.46967Z"
            fill="currentColor"
        />
    </s.Svg>
);
