import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LightbulbFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 9.5C4.5 5.35786 7.85786 2 12 2C16.1421 2 19.5 5.35786 19.5 9.5C19.5 11.7549 18.504 13.778 16.9304 15.1517C16.6427 15.4029 16.4554 15.6848 16.386 15.9714L16.1618 16.8973C15.863 18.1311 14.7585 19 13.4891 19H10.5109C9.2415 19 8.13702 18.1311 7.83821 16.8973L7.61398 15.9714C7.54457 15.6848 7.35727 15.4029 7.06956 15.1517C5.49602 13.778 4.5 11.7549 4.5 9.5ZM8.96967 9.96967C9.26256 9.67678 9.73744 9.67678 10.0303 9.96967L12 11.9393L13.9697 9.96967C14.2626 9.67678 14.7374 9.67678 15.0303 9.96967C15.3232 10.2626 15.3232 10.7374 15.0303 11.0303L12.75 13.3107V15.5C12.75 15.9142 12.4142 16.25 12 16.25C11.5858 16.25 11.25 15.9142 11.25 15.5V13.3107L8.96967 11.0303C8.67678 10.7374 8.67678 10.2626 8.96967 9.96967Z"
            fill="currentColor"
        />
        <s.Path
            d="M9.5 20.5C9.08579 20.5 8.75 20.8358 8.75 21.25C8.75 21.6642 9.08579 22 9.5 22H14.5C14.9142 22 15.25 21.6642 15.25 21.25C15.25 20.8358 14.9142 20.5 14.5 20.5H9.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
