import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoorLClosedFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.17166 1.85996C3 2.19688 3 2.63792 3 3.52V12.48C3 13.3621 3 13.8031 3.17166 14.14C3.32267 14.4364 3.56361 14.6773 3.85996 14.8283C4.19688 15 4.63792 15 5.52 15H10.48C11.3621 15 11.8031 15 12.14 14.8283C12.4364 14.6773 12.6773 14.4364 12.8283 14.14C13 13.8031 13 13.3621 13 12.48V3.52C13 2.63792 13 2.19688 12.8283 1.85996C12.6773 1.56361 12.4364 1.32267 12.14 1.17166C11.8031 1 11.3621 1 10.48 1H5.52C4.63792 1 4.19688 1 3.85996 1.17166C3.56361 1.32267 3.32267 1.56361 3.17166 1.85996ZM9.78572 9.39981C10.3775 9.39981 10.8571 8.9297 10.8571 8.3498C10.8571 7.76991 10.3775 7.2998 9.78572 7.2998C9.19399 7.2998 8.71429 7.76991 8.71429 8.3498C8.71429 8.9297 9.19399 9.39981 9.78572 9.39981Z"
            fill="currentColor"
        />
    </s.Svg>
);
