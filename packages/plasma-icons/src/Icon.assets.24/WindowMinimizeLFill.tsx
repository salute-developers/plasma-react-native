import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WindowMinimizeLFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M17.2814 4H10V5.5H17.25C17.9624 5.5 18.4517 5.50058 18.8309 5.53157C19.2014 5.56184 19.4004 5.61735 19.5445 5.69074C19.8738 5.85852 20.1415 6.12623 20.3093 6.45552C20.3827 6.59956 20.4382 6.79858 20.4684 7.16908C20.4994 7.54833 20.5 8.03756 20.5 8.75V11H12.6C11.3399 11 10.7098 11 10.2285 11.2452C9.80516 11.461 9.46095 11.8052 9.24523 12.2285C9 12.7098 9 13.3399 9 14.6V18.5H6.75C6.03756 18.5 5.54833 18.4994 5.16908 18.4684C4.79858 18.4382 4.59956 18.3827 4.45552 18.3093C4.12623 18.1415 3.85852 17.8738 3.69074 17.5445C3.61735 17.4004 3.56184 17.2014 3.53157 16.8309C3.50058 16.4517 3.5 15.9624 3.5 15.25V12H2V15.2814C1.99999 15.9548 1.99999 16.5055 2.03655 16.9531C2.0744 17.4163 2.15514 17.8347 2.35423 18.2255C2.66582 18.837 3.163 19.3342 3.77453 19.6458C4.16527 19.8449 4.58367 19.9256 5.04693 19.9634C5.49449 20 6.04519 20 6.71856 20H17.2814C17.9548 20 18.5055 20 18.9531 19.9634C19.4163 19.9256 19.8347 19.8449 20.2255 19.6458C20.837 19.3342 21.3342 18.837 21.6458 18.2255C21.8449 17.8347 21.9256 17.4163 21.9634 16.9531C22 16.5055 22 15.9548 22 15.2814V8.71858C22 8.04521 22 7.49449 21.9634 7.04693C21.9256 6.58367 21.8449 6.16527 21.6458 5.77453C21.3342 5.163 20.837 4.66582 20.2255 4.35423C19.8347 4.15514 19.4163 4.0744 18.9531 4.03655C18.5055 3.99998 17.9548 3.99999 17.2814 4Z"
            fill="currentColor"
        />
        <s.Path
            d="M2.75 10.75H8C8.41421 10.75 8.75 10.4142 8.75 10V4.75C8.75 4.33579 8.41421 4 8 4C7.58579 4 7.25 4.33579 7.25 4.75V8.18934L3.28033 4.21967C2.98744 3.92678 2.51256 3.92678 2.21967 4.21967C1.92678 4.51256 1.92678 4.98744 2.21967 5.28033L6.18934 9.25H2.75C2.33579 9.25 2 9.58579 2 10C2 10.4142 2.33579 10.75 2.75 10.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
