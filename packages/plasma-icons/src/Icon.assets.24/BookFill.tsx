import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BookFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.25322 2C5.5964 2 4.25326 3.34311 4.25322 4.99994L4.25293 19.374C4.25109 19.4104 4.25011 19.4469 4.25001 19.4837L4.25 19.4949L4.25001 19.5061C4.25334 20.744 5.25603 21.7467 6.49394 21.75L19 21.75C19.4142 21.75 19.75 21.4142 19.75 21C19.75 20.5858 19.4142 20.25 19 20.25L6.49798 20.25C6.08534 20.2489 5.75111 19.9147 5.75 19.502V19.4877C5.7511 19.0771 6.08222 18.7437 6.49284 18.7398L7.88111 18.7303H17.9996C19.1042 18.7303 19.9996 17.8348 19.9996 16.7303V4C19.9996 2.89543 19.1042 2 17.9996 2H7.25322Z"
            fill="currentColor"
        />
    </s.Svg>
);
