import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwitchToggleOnOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 7.75C15 10.0972 13.0972 12 10.75 12H5.25C2.90279 12 1 10.0972 1 7.75C1 5.40279 2.90279 3.5 5.25 3.5H10.75C13.0972 3.5 15 5.40279 15 7.75ZM10.75 11C12.5449 11 14 9.54493 14 7.75C14 5.95507 12.5449 4.5 10.75 4.5H5.25C3.45507 4.5 2 5.95507 2 7.75C2 9.54493 3.45508 11 5.25 11H10.75Z"
            fill="currentColor"
        />
        <s.Path
            d="M9 7.8501C9 6.74553 9.89543 5.8501 11 5.8501C12.1046 5.8501 13 6.74553 13 7.8501C13 8.95467 12.1046 9.8501 11 9.8501C9.89543 9.8501 9 8.95467 9 7.8501Z"
            fill="currentColor"
        />
    </s.Svg>
);
