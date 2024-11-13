import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CursorOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.G clipPath="url(#clip0_34946_4361)">
            <s.Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.00311 4.02823C6.04792 3.56061 4.98227 4.42356 5.24107 5.4551L9.16486 21.0945C9.46721 22.2996 11.1518 22.3734 11.5584 21.1994L13.9223 14.3742L21.0899 13.481C22.3228 13.3273 22.6008 11.6642 21.4849 11.1179L7.00311 4.02823ZM6.82695 5.61209L20.0719 12.0962L13.5825 12.9049C13.1098 12.9638 12.7117 13.2862 12.5559 13.7362L10.4156 19.9157L6.82695 5.61209Z"
                fill="currentColor"
            />
        </s.G>
        <s.Defs>
            <s.ClipPath id="clip0_34946_4361">
                <s.Rect width="24" height="24" fill="currentColor" />
            </s.ClipPath>
        </s.Defs>
    </s.Svg>
);
