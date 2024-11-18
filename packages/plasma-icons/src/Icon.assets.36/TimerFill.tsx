import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TimerFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.875 4.5C12.875 3.94772 13.3227 3.5 13.875 3.5H22.125C22.6773 3.5 23.125 3.94772 23.125 4.5C23.125 5.05228 22.6773 5.5 22.125 5.5H13.875C13.3227 5.5 12.875 5.05228 12.875 4.5ZM18 32.9996C25.0416 32.9996 30.75 27.2152 30.75 20.0798C30.75 16.713 29.4791 13.6469 27.3969 11.3474L28.4616 10.269C28.8496 9.87596 28.8456 9.24281 28.4526 8.85479C28.0596 8.46677 27.4264 8.47082 27.0384 8.86384L25.9433 9.97304C23.7644 8.21235 21.0035 7.15999 18 7.15999C10.9584 7.15999 5.25 12.9444 5.25 20.0798C5.25 27.2152 10.9584 32.9996 18 32.9996ZM23.6757 15.1701C24.1122 14.7279 24.1075 14.0156 23.6652 13.5792C23.223 13.1428 22.5107 13.1475 22.0743 13.5897L17.1993 18.5296C16.7628 18.9719 16.7675 19.6842 17.2098 20.1206C17.652 20.557 18.3643 20.5523 18.8007 20.1101L23.6757 15.1701Z"
            fill="currentColor"
        />
    </s.Svg>
);
