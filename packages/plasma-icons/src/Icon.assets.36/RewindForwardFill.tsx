import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const RewindForwardFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8924 22.9952V13.0091L8.41798 9.08C6.91852 8.17003 5.00067 9.24954 5.00067 11.0035V25.0007C5.00067 26.7547 6.91852 27.8342 8.41798 26.9242L14.8924 22.9952ZM31.9095 16.0786C33.3531 16.9547 33.3531 19.0496 31.9095 19.9256L20.3771 26.9242C18.8776 27.8342 16.9598 26.7547 16.9598 25.0007V11.0035C16.9598 9.24954 18.8776 8.17003 20.3771 9.08L31.9095 16.0786Z"
            fill="currentColor"
        />
    </s.Svg>
);
