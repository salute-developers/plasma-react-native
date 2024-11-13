import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoneCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM26.5425 14.5785C27.1382 14.0027 27.1543 13.0531 26.5785 12.4575C26.0027 11.8618 25.0531 11.8457 24.4575 12.4215L14.6379 21.9137L11.5425 18.9215C10.9469 18.3457 9.99729 18.3618 9.42152 18.9575C8.84574 19.5531 8.86184 20.5027 9.45747 21.0785L13.5954 25.0785C14.1768 25.6405 15.0991 25.6405 15.6805 25.0785L26.5425 14.5785Z"
            fill="currentColor"
        />
    </s.Svg>
);
