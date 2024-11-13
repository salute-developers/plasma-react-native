import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MailOpenFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.51697 1.05248C8.17576 0.982507 7.82433 0.982507 7.48312 1.05248C7.09638 1.13178 6.73874 1.32932 6.22151 1.61501L2.96161 3.41402C2.39419 3.72685 2.00209 3.94303 1.70915 4.26235C1.45089 4.54387 1.2552 4.87897 1.13543 5.24478C0.999587 5.65972 0.999765 6.11468 1.00002 6.77305L1.00004 11.0566C1.00004 11.6375 1.00004 12.106 1.0304 12.4855C1.06166 12.8761 1.12771 13.2192 1.28615 13.5367C1.53782 14.041 1.93939 14.451 2.43332 14.7079C2.74427 14.8697 3.08037 14.9371 3.46302 14.969C3.83465 15 4.29358 15 4.86256 15H11.1375C11.7065 15 12.1654 15 12.5371 14.969C12.9197 14.9371 13.2558 14.8697 13.5668 14.7079C14.0607 14.451 14.4623 14.041 14.7139 13.5367C14.8724 13.2192 14.9384 12.8761 14.9697 12.4855C15.0001 12.106 15.0001 11.6375 15 11.0566L15.0001 6.77306C15.0003 6.11468 15.0005 5.65972 14.8647 5.24478C14.7449 4.87897 14.5492 4.54387 14.2909 4.26235C13.998 3.94304 13.6059 3.72686 13.0385 3.41402L9.77858 1.61501C9.26135 1.32932 8.90371 1.13178 8.51697 1.05248ZM3.71521 6.3583C3.48139 6.2114 3.17275 6.28186 3.02584 6.51568C2.87894 6.74951 2.9494 7.05815 3.18322 7.20505L6.61605 9.3618C7.46164 9.89306 8.5368 9.89306 9.38239 9.3618L12.8152 7.20505C13.049 7.05815 13.1195 6.74951 12.9726 6.51568C12.8257 6.28186 12.517 6.2114 12.2832 6.3583L8.8504 8.51504C8.33004 8.84198 7.6684 8.84198 7.14804 8.51504L3.71521 6.3583Z"
            fill="currentColor"
        />
    </s.Svg>
);
