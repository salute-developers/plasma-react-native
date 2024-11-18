import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header1: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6582 12.705V17.25H12.0646V6.75H10.6582V10.98H6.89486V6.75H5.5V17.25H6.89486V12.705H10.6582ZM13.4453 10.2995L15.5099 8.67558V15.85H13.4453V17.25H18.4453V15.85H16.9453V6.75H15.5099L13.4453 8.47277V10.2995Z"
            fill="currentColor"
        />
    </s.Svg>
);
