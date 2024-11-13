import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const NextOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2803 13.9196C17.7223 13.0433 17.7223 10.9504 16.2803 10.0741L6.41854 4.08075C4.91911 3.16949 3 4.2489 3 6.00352V17.9902C3 19.7449 4.91911 20.8243 6.41854 19.913L16.2803 13.9196ZM15.5013 11.356C15.9819 11.6481 15.9819 12.3457 15.5013 12.6378L5.63951 18.6312C5.1397 18.9349 4.5 18.5751 4.5 17.9902L4.5 6.00352C4.5 5.41864 5.13971 5.05884 5.63951 5.36259L15.5013 11.356ZM21 4.99688C21 4.58266 20.6642 4.24688 20.25 4.24688C19.8358 4.24688 19.5 4.58266 19.5 4.99688V19.4969C19.5 19.9111 19.8358 20.2469 20.25 20.2469C20.6642 20.2469 21 19.9111 21 19.4969V4.99688Z"
            fill="currentColor"
        />
    </s.Svg>
);
