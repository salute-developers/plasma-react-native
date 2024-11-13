import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PrinterFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 15.75C3 12.8505 5.35051 10.5 8.25 10.5V6C8.25 5.58579 8.58579 5.25 9 5.25H27C27.4142 5.25 27.75 5.58579 27.75 6V10.5C30.6495 10.5 33 12.8505 33 15.75V24C33 24.8284 32.3284 25.5 31.5 25.5H27.75V30C27.75 30.4142 27.4142 30.75 27 30.75H9C8.58579 30.75 8.25 30.4142 8.25 30V25.5H4.5C3.67157 25.5 3 24.8284 3 24V15.75ZM27.75 16.5C27.75 17.3284 27.0784 18 26.25 18C25.4216 18 24.75 17.3284 24.75 16.5C24.75 15.6716 25.4216 15 26.25 15C27.0784 15 27.75 15.6716 27.75 16.5ZM25.75 10.5H10.25V7.25H25.75V10.5ZM10.25 28.75H25.75V22.25H10.25V28.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
