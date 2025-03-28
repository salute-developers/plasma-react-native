import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwitchToggleOffOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 7.75C1 5.40279 2.90279 3.5 5.25 3.5H10.75C13.0972 3.5 15 5.40279 15 7.75C15 10.0972 13.0972 12 10.75 12H5.25C2.90279 12 1 10.0972 1 7.75ZM5.25 4.5C3.45507 4.5 2 5.95507 2 7.75C2 9.54493 3.45507 11 5.25 11H10.75C12.5449 11 14 9.54493 14 7.75C14 5.95507 12.5449 4.5 10.75 4.5H5.25Z"
            fill="currentColor"
        />
        <s.Path
            d="M7 7.6499C7 8.75447 6.10457 9.6499 5 9.6499C3.89543 9.6499 3 8.75447 3 7.6499C3 6.54533 3.89543 5.6499 5 5.6499C6.10457 5.6499 7 6.54533 7 7.6499Z"
            fill="currentColor"
        />
    </s.Svg>
);
