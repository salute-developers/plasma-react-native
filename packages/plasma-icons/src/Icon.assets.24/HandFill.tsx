import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HandFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3548 4C11.3548 3.44772 11.8025 3 12.3548 3C12.9071 3 13.3548 3.44772 13.3548 4V11.5C13.3548 11.6381 13.4667 11.75 13.6048 11.75C13.7429 11.75 13.8548 11.6381 13.8548 11.5V6C13.8548 5.44772 14.3025 5 14.8548 5C15.4071 5 15.8548 5.44772 15.8548 6V12.25C15.8548 12.3881 15.9667 12.5 16.1048 12.5C16.2429 12.5 16.3548 12.3881 16.3548 12.25V9.25C16.3548 8.69772 16.8025 8.25 17.3548 8.25C17.9071 8.25 18.3548 8.69772 18.3548 9.25V14.75C18.3548 14.7594 18.3553 14.7687 18.3563 14.7779C18.3447 17.1164 16.8966 19.3069 14.5714 20.1533C11.5873 21.2394 8.28767 19.7008 7.20154 16.7166L5.23492 11.3134C5.04603 10.7944 5.31362 10.2206 5.8326 10.0317C5.86349 10.0204 5.89459 10.0108 5.92578 10.0027C6.33307 9.92612 6.74881 10.0657 6.92413 10.4351C7.09439 10.7939 7.23535 11.0682 7.36645 11.3221L8.36988 14.079C8.41137 14.193 8.52873 14.2608 8.64821 14.2397C8.76769 14.2186 8.8548 14.1148 8.8548 13.9935L8.8548 5.5C8.8548 4.94772 9.30251 4.5 9.8548 4.5C10.4071 4.5 10.8548 4.94772 10.8548 5.5L10.8548 10.75C10.8548 10.8881 10.9667 11 11.1048 11C11.2429 11 11.3548 10.8881 11.3548 10.75V4Z"
            fill="currentColor"
        />
    </s.Svg>
);