import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TrashOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M10 10.75C10.4142 10.75 10.75 11.0858 10.75 11.5V17.5C10.75 17.9142 10.4142 18.25 10 18.25C9.58579 18.25 9.25 17.9142 9.25 17.5V11.5C9.25 11.0858 9.58579 10.75 10 10.75Z"
            fill="currentColor"
        />
        <s.Path
            d="M14.75 11.5C14.75 11.0858 14.4142 10.75 14 10.75C13.5858 10.75 13.25 11.0858 13.25 11.5V17.5C13.25 17.9142 13.5858 18.25 14 18.25C14.4142 18.25 14.75 17.9142 14.75 17.5V11.5Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 5.75C8.25 4.09315 9.59315 2.75 11.25 2.75H12.75C14.4069 2.75 15.75 4.09315 15.75 5.75V6.5H19.25C19.6642 6.5 20 6.83579 20 7.25C20 7.66421 19.6642 8 19.25 8H18V16.8305C18 17.3646 18 17.8105 17.9703 18.1747C17.9392 18.5546 17.8721 18.9112 17.7003 19.2485C17.4366 19.7659 17.0159 20.1866 16.4985 20.4503C16.1612 20.6221 15.8046 20.6892 15.4247 20.7203C15.0604 20.75 14.6146 20.75 14.0805 20.75H9.91955C9.3854 20.75 8.93956 20.75 8.57533 20.7203C8.19545 20.6892 7.83879 20.6221 7.50153 20.4503C6.98408 20.1866 6.56338 19.7659 6.29973 19.2485C6.12789 18.9112 6.06078 18.5546 6.02974 18.1747C5.99998 17.8104 5.99999 17.3646 6 16.8304L6 8H4.75C4.33579 8 4 7.66421 4 7.25C4 6.83579 4.33579 6.5 4.75 6.5H8.25V5.75ZM9.75 6.5H14.25V5.75C14.25 4.92157 13.5784 4.25 12.75 4.25H11.25C10.4216 4.25 9.75 4.92157 9.75 5.75V6.5ZM7.5 8V16.8C7.5 17.3724 7.50058 17.7566 7.52476 18.0525C7.54822 18.3396 7.5901 18.4769 7.63624 18.5675C7.75608 18.8027 7.94731 18.9939 8.18251 19.1138C8.27307 19.1599 8.41035 19.2018 8.69748 19.2252C8.99336 19.2494 9.37757 19.25 9.95 19.25H14.05C14.6224 19.25 15.0066 19.2494 15.3025 19.2252C15.5896 19.2018 15.7269 19.1599 15.8175 19.1138C16.0527 18.9939 16.2439 18.8027 16.3638 18.5675C16.4099 18.4769 16.4518 18.3396 16.4752 18.0525C16.4994 17.7566 16.5 17.3724 16.5 16.8V8H7.5Z"
            fill="currentColor"
        />
    </s.Svg>
);