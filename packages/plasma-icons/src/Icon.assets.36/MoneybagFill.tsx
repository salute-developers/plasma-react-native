import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MoneybagFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.67479 4.5C8.26705 4.5 7.89158 4.72296 7.69476 5.08196C7.49795 5.44096 7.51093 5.87916 7.72866 6.22574L10.9636 11.375H25.0364L28.2713 6.22574C28.4891 5.87916 28.5021 5.44096 28.3052 5.08196C28.1084 4.72296 27.733 4.5 27.3252 4.5H8.67479ZM26.3363 13.375H9.66374C7.46181 15.0471 5.8198 17.4594 5.12627 20.3064L5.00033 20.8234C3.67674 26.2569 7.76892 31.5 13.3333 31.5H22.6667C28.2311 31.5 32.3233 26.2569 30.9997 20.8234L30.8737 20.3064C30.1802 17.4594 28.5382 15.0471 26.3363 13.375Z"
            fill="currentColor"
        />
    </s.Svg>
);
