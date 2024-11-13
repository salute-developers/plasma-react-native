import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PrinterOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 7V5H17V7H7ZM5.5 7V4C5.5 3.72386 5.72386 3.5 6 3.5H18C18.2761 3.5 18.5 3.72386 18.5 4V7C20.433 7 22 8.567 22 10.5V16C22 16.5523 21.5523 17 21 17H18.5V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V17H3C2.44772 17 2 16.5523 2 16V10.5C2 8.567 3.567 7 5.5 7ZM20.5 15.5H18.5V14C18.5 13.7239 18.2761 13.5 18 13.5H6C5.72386 13.5 5.5 13.7239 5.5 14V15.5H3.5V10.5C3.5 9.39543 4.39543 8.5 5.5 8.5H18.5C19.6046 8.5 20.5 9.39543 20.5 10.5V15.5ZM7 19H17V15H7V19ZM17.5 12C18.0523 12 18.5 11.5523 18.5 11C18.5 10.4477 18.0523 10 17.5 10C16.9477 10 16.5 10.4477 16.5 11C16.5 11.5523 16.9477 12 17.5 12Z"
            fill="currentColor"
        />
    </s.Svg>
);
