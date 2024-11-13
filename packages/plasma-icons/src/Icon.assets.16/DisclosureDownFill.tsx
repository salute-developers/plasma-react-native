import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DisclosureDownFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4542 6.45904C11.3727 6.28164 11.1953 6.20312 11 6.20312H5.00001C4.80474 6.20312 4.62734 6.28164 4.54575 6.45904C4.46416 6.63644 4.4933 6.84511 4.62038 6.99336L7.62037 10.4934C7.71536 10.6042 7.85404 10.668 8 10.668C8.14596 10.668 8.28464 10.6042 8.37963 10.4934L11.3796 6.99336C11.5067 6.84511 11.5358 6.63644 11.4542 6.45904Z"
            fill="currentColor"
        />
    </s.Svg>
);
