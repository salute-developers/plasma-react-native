import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const UsbCFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16H18C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8H6ZM6.75 11.25C6.33579 11.25 6 11.5858 6 12C6 12.4142 6.33579 12.75 6.75 12.75H17.25C17.6642 12.75 18 12.4142 18 12C18 11.5858 17.6642 11.25 17.25 11.25H6.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
