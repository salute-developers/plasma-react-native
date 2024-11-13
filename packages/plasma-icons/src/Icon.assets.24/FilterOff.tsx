import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const FilterOff: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M21.0157 4.04498C21.3086 3.75209 21.3086 3.27721 21.0157 2.98432C20.7228 2.69143 20.2479 2.69143 19.955 2.98432L16.6895 6.24989H3.75001C3.3358 6.24989 3.00001 6.58567 3.00001 6.99989C3.00001 7.4141 3.3358 7.74989 3.75001 7.74989H15.1895L11.6895 11.2499H6.75001C6.3358 11.2499 6.00001 11.5857 6.00001 11.9999C6.00001 12.4141 6.3358 12.7499 6.75001 12.7499H10.1895L2.98447 19.9549C2.69158 20.2478 2.69158 20.7226 2.98447 21.0155C3.27736 21.3084 3.75224 21.3084 4.04513 21.0155L21.0157 4.04498Z"
            fill="currentColor"
        />
        <s.Path
            d="M15.9323 11.2499L14.4323 12.7499H17.25C17.6642 12.7499 18 12.4141 18 11.9999C18 11.5857 17.6642 11.2499 17.25 11.2499H15.9323Z"
            fill="currentColor"
        />
        <s.Path
            d="M10.9323 16.2499L9.48168 17.7005C9.565 17.7324 9.65546 17.7499 9.75001 17.7499H14.25C14.6642 17.7499 15 17.4141 15 16.9999C15 16.5857 14.6642 16.2499 14.25 16.2499H10.9323Z"
            fill="currentColor"
        />
        <s.Path
            d="M20.7454 6.43675L19.4323 7.74989H20.25C20.6642 7.74989 21 7.4141 21 6.99989C21 6.77554 20.9015 6.5742 20.7454 6.43675Z"
            fill="currentColor"
        />
    </s.Svg>
);