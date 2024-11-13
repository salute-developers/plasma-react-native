import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PowerWireOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 3C10 2.44772 9.55228 2 9 2C8.44772 2 8 2.44772 8 3V7H7.75C6.7835 7 6 7.7835 6 8.75V12.1603C6 13.5469 6.60592 14.8643 7.65874 15.7667L9.4127 17.2701C9.46811 17.3176 9.5 17.387 9.5 17.4599V22H14.5V17.4599C14.5 17.387 14.5319 17.3176 14.5873 17.2701L16.3413 15.7667C17.3941 14.8643 18 13.5469 18 12.1603V8.75C18 7.7835 17.2165 7 16.25 7H16V3C16 2.44772 15.5523 2 15 2C14.4477 2 14 2.44772 14 3V7H10V3ZM7.5 8.75C7.5 8.61193 7.61193 8.5 7.75 8.5H16.25C16.3881 8.5 16.5 8.61193 16.5 8.75V12.1603C16.5 13.109 16.0854 14.0104 15.3651 14.6278L13.6111 16.1312C13.2232 16.4637 13 16.9491 13 17.4599V20.5H11V17.4599C11 16.9491 10.7768 16.4637 10.3889 16.1312L8.63493 14.6278C7.91458 14.0104 7.5 13.109 7.5 12.1603V8.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
