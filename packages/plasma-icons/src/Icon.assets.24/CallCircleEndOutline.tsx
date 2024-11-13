import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CallCircleEndOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M15.5283 14.3908C16.5842 14.5858 18 14.6369 18 13.508C18 12.608 18 9.00415 12 9.00415C6.00003 9.00415 6.00003 12.608 6.00003 13.508C6.00003 14.6369 7.41586 14.5858 8.47171 14.3908C8.78667 14.3327 8.94416 14.3036 9.07451 14.2304C9.21764 14.1499 9.27081 14.1022 9.3662 13.9686C9.45306 13.8469 9.54184 13.5502 9.71938 12.9569C9.9391 12.2226 10.517 11.408 12 11.408C13.483 11.408 14.0609 12.2226 14.2806 12.9569C14.4582 13.5502 14.547 13.8469 14.6338 13.9686C14.7292 14.1022 14.7824 14.1499 14.9255 14.2304C15.0559 14.3036 15.2133 14.3327 15.5283 14.3908Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
            fill="currentColor"
        />
    </s.Svg>
);
