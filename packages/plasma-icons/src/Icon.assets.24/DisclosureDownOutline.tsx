import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureDownOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.96967 9.9676C7.26256 9.67471 7.73744 9.67471 8.03033 9.9676L12 13.9373L15.9697 9.9676C16.2626 9.67471 16.7374 9.67471 17.0303 9.9676C17.3232 10.2605 17.3232 10.7354 17.0303 11.0283L12 16.0586L6.96967 11.0283C6.67678 10.7354 6.67678 10.2605 6.96967 9.9676Z"
            fill="currentColor"
        />
    </s.Svg>
);
