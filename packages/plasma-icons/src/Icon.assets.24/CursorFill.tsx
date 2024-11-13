import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CursorFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.G clipPath="url(#clip0_34946_4364)">
            <s.Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.00342 4.02823C6.04823 3.56061 4.98257 4.42356 5.24138 5.4551L9.16517 21.0945C9.46752 22.2996 11.1521 22.3734 11.5588 21.1994L13.9226 14.3742L21.0902 13.481C22.3231 13.3273 22.6011 11.6642 21.4852 11.1179L7.00342 4.02823Z"
                fill="currentColor"
            />
        </s.G>
        <s.Defs>
            <s.ClipPath id="clip0_34946_4364">
                <s.Rect width="24" height="24" fill="currentColor" />
            </s.ClipPath>
        </s.Defs>
    </s.Svg>
);
