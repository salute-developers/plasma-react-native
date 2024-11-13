import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ProfileBadgeOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C9.2386 2 7.00001 4.23857 7.00001 7C7.00001 9.76143 9.2386 12 12 12C14.7615 12 17 9.76143 17 7C17 4.23857 14.7615 2 12 2ZM8.50001 7C8.50001 5.06701 10.067 3.5 12 3.5C13.933 3.5 15.5 5.06701 15.5 7C15.5 8.93299 13.933 10.5 12 10.5C10.067 10.5 8.50001 8.93299 8.50001 7Z"
            fill="currentColor"
        />
        <s.Path
            d="M14 17C13.5858 17 13.25 17.3358 13.25 17.75C13.25 18.1642 13.5858 18.5 14 18.5H17C17.4142 18.5 17.75 18.1642 17.75 17.75C17.75 17.3358 17.4142 17 17 17H14Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0001 13.5C9.10014 13.5 6.40039 14.3671 4.14876 15.8563C3.41076 16.3444 2.94989 17.2134 3.05464 18.1402C3.09866 18.5297 3.18199 18.8874 3.35422 19.2255C3.66581 19.837 4.163 20.3342 4.77453 20.6458C5.16527 20.8449 5.58367 20.9256 6.04693 20.9634C6.49449 21 7.04519 21 7.71856 21H16.2814C16.9548 21 17.5055 21 17.9531 20.9634C18.4163 20.9256 18.8347 20.8449 19.2255 20.6458C19.837 20.3342 20.3342 19.837 20.6458 19.2255C20.818 18.8874 20.9014 18.5296 20.9454 18.14C21.0501 17.2132 20.5892 16.3442 19.8512 15.8561C17.5996 14.367 14.9 13.5 12.0001 13.5ZM4.97623 17.1074C6.99 15.7755 9.40336 15 12.0001 15C14.5968 15 17.01 15.7754 19.0237 17.1072C19.3321 17.3112 19.491 17.6518 19.4549 17.9716C19.4229 18.2541 19.3725 18.4203 19.3093 18.5445C19.1415 18.8738 18.8738 19.1415 18.5445 19.3093C18.4004 19.3827 18.2014 19.4382 17.8309 19.4684C17.4517 19.4994 16.9624 19.5 16.25 19.5H7.75C7.03755 19.5 6.54833 19.4994 6.16907 19.4684C5.79857 19.4382 5.59955 19.3827 5.45551 19.3093C5.12623 19.1415 4.85851 18.8738 4.69073 18.5445C4.62748 18.4203 4.57707 18.2542 4.54515 17.9717C4.50901 17.6519 4.66785 17.3113 4.97623 17.1074Z"
            fill="currentColor"
        />
    </s.Svg>
);
