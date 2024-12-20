import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoubleDisclosureDown: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.96967 7.03022C7.26256 6.73732 7.73744 6.73732 8.03033 7.03022L12 10.9999L15.9697 7.03022C16.2626 6.73732 16.7374 6.73732 17.0303 7.03022C17.3232 7.32311 17.3232 7.79798 17.0303 8.09088L12 13.1212L6.96967 8.09088C6.67678 7.79798 6.67678 7.32311 6.96967 7.03022Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.96967 12.4089C7.26256 12.116 7.73744 12.116 8.03033 12.4089L12 16.3786L15.9697 12.4089C16.2626 12.116 16.7374 12.116 17.0303 12.4089C17.3232 12.7018 17.3232 13.1767 17.0303 13.4696L12 18.4999L6.96967 13.4696C6.67678 13.1767 6.67678 12.7018 6.96967 12.4089Z"
            fill="currentColor"
        />
    </s.Svg>
);
