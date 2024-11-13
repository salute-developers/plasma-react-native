import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const AttentionTriangleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9706 3.99715C13.1134 2.45408 10.8942 2.45408 10.0369 3.99715L2.58619 17.4085C1.75302 18.9082 2.83745 20.7512 4.55304 20.7512H19.4545C21.1701 20.7512 22.2545 18.9081 21.4214 17.4085L13.9706 3.99715ZM11.3482 4.72561C11.6339 4.21125 12.3736 4.21125 12.6594 4.72561L20.1101 18.1369C20.3878 18.6368 20.0264 19.2512 19.4545 19.2512H4.55304C3.98118 19.2512 3.6197 18.6368 3.89742 18.1369L11.3482 4.72561ZM12.0038 8.00115C12.5561 8.00115 13.0038 8.44887 13.0038 9.00115V13.0012C13.0038 13.5534 12.5561 14.0012 12.0038 14.0012C11.4515 14.0012 11.0038 13.5534 11.0038 13.0012V9.00115C11.0038 8.44887 11.4515 8.00115 12.0038 8.00115ZM13.0038 17.0012C13.0038 17.5534 12.5561 18.0012 12.0038 18.0012C11.4515 18.0012 11.0038 17.5534 11.0038 17.0012C11.0038 16.4489 11.4515 16.0012 12.0038 16.0012C12.5561 16.0012 13.0038 16.4489 13.0038 17.0012Z"
            fill="currentColor"
        />
    </s.Svg>
);