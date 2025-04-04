import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureUpFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.58872 9.51215C4.67031 9.68955 4.84771 9.80322 5.04298 9.80322H11.043C11.2382 9.80322 11.4156 9.68955 11.4972 9.51215C11.5788 9.33475 11.5497 9.12608 11.4226 8.97783L8.4226 5.47783C8.32761 5.367 8.18893 5.30322 8.04297 5.30322C7.89701 5.30322 7.75833 5.367 7.66334 5.47783L4.66335 8.97783C4.53627 9.12608 4.50713 9.33475 4.58872 9.51215Z"
            fill="currentColor"
        />
    </s.Svg>
);
