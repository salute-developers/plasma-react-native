import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HourglassTopFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.83071 1.00004C4.42549 0.99973 4.11211 0.999494 3.84186 1.08296C3.23762 1.26959 2.76478 1.75104 2.58148 2.36628C2.4995 2.64144 2.49974 2.96053 2.50004 3.37311L2.50007 3.45007C2.50007 4.62725 3.20824 5.66755 3.94818 6.4459C4.58033 7.11086 5.29804 7.64975 5.81503 8.00007C5.29804 8.3504 4.58033 8.88929 3.94818 9.55425C3.20824 10.3326 2.50007 11.3729 2.50007 12.5501L2.50004 12.627C2.49974 13.0396 2.4995 13.3587 2.58148 13.6339C2.76477 14.2491 3.23762 14.7306 3.84186 14.9172C4.11211 15.0007 4.42549 15.0004 4.8307 15.0001H11.1693C11.5745 15.0004 11.8879 15.0007 12.1581 14.9172C12.7624 14.7306 13.2352 14.2491 13.4185 13.6339C13.5005 13.3587 13.5003 13.0396 13.5 12.627L13.4999 12.5501C13.4999 11.3729 12.7918 10.3326 12.0518 9.55425C11.4197 8.88929 10.702 8.3504 10.185 8.00008C10.702 7.64975 11.4197 7.11086 12.0518 6.4459C12.7918 5.66755 13.4999 4.62725 13.4999 3.45007L13.5 3.37311C13.5003 2.96053 13.5005 2.64144 13.4185 2.36628C13.2352 1.75104 12.7624 1.26959 12.1581 1.08296C11.8879 0.999494 11.5745 0.99973 11.1693 1.00004H4.83071ZM7.18939 6.40473L7.20437 6.41432C7.64631 6.69701 8.28156 6.7421 8.79398 6.41432L8.80895 6.40473C9.25806 6.11656 9.97867 5.60589 10.569 4.98486C11.0333 4.49651 11.3584 4.00756 11.4235 3.37297C11.4322 3.28904 11.4365 3.24708 11.4193 3.20602C11.4053 3.17253 11.3751 3.13859 11.3434 3.12084C11.3046 3.09908 11.2574 3.09847 11.1629 3.09725C9.0549 3.07011 6.9434 3.07011 4.83541 3.09725C4.74097 3.09847 4.69376 3.09908 4.65494 3.12084C4.62327 3.13859 4.59303 3.17253 4.57904 3.20602C4.56188 3.24708 4.56619 3.28904 4.5748 3.37297C4.6399 4.00756 4.96505 4.49651 5.4293 4.98486C6.01968 5.60589 6.74029 6.11656 7.18939 6.40473Z"
            fill="currentColor"
        />
    </s.Svg>
);