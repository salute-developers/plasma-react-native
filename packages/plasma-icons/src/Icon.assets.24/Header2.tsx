import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header2: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6582 12.705V17.25H12.0646V6.75H10.6582V10.98H6.89486V6.75H5.5V17.25H6.89486V12.705H10.6582ZM13 17.25H19V15.5469H15.2516L15.7673 15.0286C17.9937 12.8221 18.761 11.4744 18.761 9.77137C18.761 7.94984 17.7673 6.7651 15.9182 6.75029C14.673 6.73548 13.7044 7.28342 13.2767 7.78694V9.75656C13.8553 8.97167 14.6855 8.5422 15.6918 8.55701C16.6352 8.55701 17.2138 9.13457 17.2138 10.1564C17.2138 11.2227 16.6478 12.3185 13 15.9764V17.25Z"
            fill="currentColor"
        />
    </s.Svg>
);
