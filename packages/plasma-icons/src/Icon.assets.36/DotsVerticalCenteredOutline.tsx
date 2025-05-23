import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DotsVerticalCenteredOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 12C19.65 12 21 10.65 21 9C21 7.35 19.65 6 18 6C16.35 6 15 7.35 15 9C15 10.65 16.35 12 18 12ZM18 15C16.35 15 15 16.35 15 18C15 19.65 16.35 21 18 21C19.65 21 21 19.65 21 18C21 16.35 19.65 15 18 15ZM18 24C16.35 24 15 25.35 15 27C15 28.65 16.35 30 18 30C19.65 30 21 28.65 21 27C21 25.35 19.65 24 18 24Z"
            fill="currentColor"
        />
    </s.Svg>
);
