import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const KeyboardOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M6 16.25C6 15.8358 6.33579 15.5 6.75 15.5H17.25C17.6642 15.5 18 15.8358 18 16.25C18 16.6642 17.6642 17 17.25 17H6.75C6.33579 17 6 16.6642 6 16.25Z"
            fill="currentColor"
        />
        <s.Path
            d="M5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9Z"
            fill="currentColor"
        />
        <s.Path
            d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11Z"
            fill="currentColor"
        />
        <s.Path
            d="M16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11Z"
            fill="currentColor"
        />
        <s.Path
            d="M10 8C9.44772 8 9 8.44772 9 9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9C11 8.44772 10.5523 8 10 8Z"
            fill="currentColor"
        />
        <s.Path
            d="M13 9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9C15 9.55228 14.5523 10 14 10C13.4477 10 13 9.55228 13 9Z"
            fill="currentColor"
        />
        <s.Path
            d="M18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8Z"
            fill="currentColor"
        />
        <s.Path
            d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5179 4H16.4821C17.2949 3.99999 17.9506 3.99999 18.4815 4.04336C19.0281 4.08803 19.5082 4.18239 19.9525 4.40873C20.6581 4.76825 21.2317 5.34193 21.5913 6.04754C21.8176 6.49175 21.912 6.9719 21.9566 7.51853C22 8.04944 22 8.70505 22 9.51788V14.4821C22 15.295 22 15.9506 21.9566 16.4815C21.912 17.0281 21.8176 17.5082 21.5913 17.9525C21.2317 18.6581 20.6581 19.2317 19.9525 19.5913C19.5082 19.8176 19.0281 19.912 18.4815 19.9566C17.9506 20 17.295 20 16.4821 20H7.51788C6.70505 20 6.04944 20 5.51853 19.9566C4.9719 19.912 4.49175 19.8176 4.04754 19.5913C3.34193 19.2317 2.76825 18.6581 2.40873 17.9525C2.18239 17.5082 2.08803 17.0281 2.04336 16.4815C1.99999 15.9506 1.99999 15.295 2 14.4821V9.5179C1.99999 8.70506 1.99999 8.04944 2.04336 7.51853C2.08803 6.9719 2.18239 6.49175 2.40873 6.04754C2.76825 5.34193 3.34193 4.76825 4.04754 4.40873C4.49175 4.18239 4.9719 4.08803 5.51853 4.04336C6.04944 3.99999 6.70506 3.99999 7.5179 4ZM5.64068 5.53838C5.18681 5.57547 4.92604 5.6446 4.72852 5.74524C4.30516 5.96095 3.96095 6.30516 3.74524 6.72852C3.6446 6.92604 3.57547 7.18681 3.53838 7.64068C3.50058 8.10331 3.5 8.69755 3.5 9.55V14.45C3.5 15.3025 3.50058 15.8967 3.53838 16.3593C3.57547 16.8132 3.6446 17.074 3.74524 17.2715C3.96095 17.6948 4.30516 18.039 4.72852 18.2548C4.92604 18.3554 5.18681 18.4245 5.64068 18.4616C6.10331 18.4994 6.69755 18.5 7.55 18.5H16.45C17.3025 18.5 17.8967 18.4994 18.3593 18.4616C18.8132 18.4245 19.074 18.3554 19.2715 18.2548C19.6948 18.039 20.039 17.6948 20.2548 17.2715C20.3554 17.074 20.4245 16.8132 20.4616 16.3593C20.4994 15.8967 20.5 15.3025 20.5 14.45V9.55C20.5 8.69755 20.4994 8.10331 20.4616 7.64068C20.4245 7.18681 20.3554 6.92604 20.2548 6.72852C20.039 6.30516 19.6948 5.96095 19.2715 5.74524C19.074 5.6446 18.8132 5.57547 18.3593 5.53838C17.8967 5.50058 17.3025 5.5 16.45 5.5H7.55C6.69755 5.5 6.10331 5.50058 5.64068 5.53838Z"
            fill="currentColor"
        />
    </s.Svg>
);