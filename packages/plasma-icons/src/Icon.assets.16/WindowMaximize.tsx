import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WindowMaximize: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.25 5.25C2.25 3.59315 3.59315 2.25 5.25 2.25H10.75C12.4069 2.25 13.75 3.59315 13.75 5.25V10.75C13.75 12.4069 12.4069 13.75 10.75 13.75H5.25C3.59315 13.75 2.25 12.4069 2.25 10.75V5.25ZM3.25 6V10.75C3.25 11.8546 4.14543 12.75 5.25 12.75H10.75C11.8546 12.75 12.75 11.8546 12.75 10.75V6H3.25Z"
            fill="currentColor"
        />
    </s.Svg>
);
