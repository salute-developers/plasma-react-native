import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BluetoothSearching: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.28513 1.04854C5.4593 0.965639 5.66561 0.990315 5.81531 1.11195L9.81531 4.36195C9.93217 4.45689 10 4.59944 10 4.75001C10 4.90057 9.93217 5.04312 9.81531 5.13806L6.29292 8.00001L9.81531 10.8619C9.93217 10.9569 10 11.0994 10 11.25C10 11.4006 9.93217 11.5431 9.81531 11.6381L5.81531 14.8881C5.66561 15.0097 5.4593 15.0344 5.28513 14.9515C5.11097 14.8686 5.00002 14.6929 5.00002 14.5V9.05049L1.81531 11.6381C1.60099 11.8122 1.28609 11.7796 1.11196 11.5653C0.937826 11.351 0.970402 11.0361 1.18472 10.8619L4.70711 8.00001L1.18472 5.13806C0.970402 4.96393 0.937826 4.64903 1.11196 4.43471C1.28609 4.22039 1.60099 4.18781 1.81531 4.36195L5.00002 6.94952V1.50001C5.00002 1.30712 5.11097 1.13143 5.28513 1.04854ZM6.00002 9.05049L8.70711 11.25L6.00002 13.4495V9.05049ZM6.00002 6.94952V2.55049L8.70711 4.75001L6.00002 6.94952Z"
            fill="currentColor"
        />
        <s.Path
            d="M11 8.00001C11 8.41422 10.6642 8.75001 10.25 8.75001C9.8358 8.75001 9.50002 8.41422 9.50002 8.00001C9.50002 7.58579 9.8358 7.25001 10.25 7.25001C10.6642 7.25001 11 7.58579 11 8.00001Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.063 4.00714C11.1971 3.76576 11.5015 3.67882 11.7429 3.81295C12.5021 4.23484 13.1349 4.84299 13.5759 5.57815C14.017 6.31347 14.25 7.14914 14.25 8.00098C14.25 8.85281 14.017 9.68848 13.5759 10.4238C13.1349 11.159 12.5021 11.7671 11.7429 12.189C11.5015 12.3231 11.1971 12.2362 11.063 11.9948C10.9288 11.7534 11.0158 11.449 11.2571 11.3149C11.8661 10.9765 12.3694 10.4911 12.7184 9.9094C13.0672 9.32786 13.25 8.66973 13.25 8.00098C13.25 7.33223 13.0672 6.6741 12.7184 6.09255C12.3694 5.51084 11.8661 5.02546 11.2571 4.68706C11.0158 4.55292 10.9288 4.24851 11.063 4.00714Z"
            fill="currentColor"
        />
    </s.Svg>
);