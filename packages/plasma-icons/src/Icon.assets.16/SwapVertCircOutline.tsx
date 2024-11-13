import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwapVertCircOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.00195 8.00016C2.00195 11.3129 4.68744 13.9984 8.00016 13.9984C11.3129 13.9984 13.9984 11.3129 13.9984 8.00016C13.9984 4.68744 11.3129 2.00195 8.00016 2.00195C4.68744 2.00195 2.00195 4.68744 2.00195 8.00016ZM8.00016 14.9984C4.13516 14.9984 1.00195 11.8652 1.00195 8.00016C1.00195 4.13516 4.13516 1.00195 8.00016 1.00195C11.8652 1.00195 14.9984 4.13516 14.9984 8.00016C14.9984 11.8652 11.8652 14.9984 8.00016 14.9984ZM4.48551 9.92925C4.68078 9.73399 4.99736 9.73399 5.19262 9.92925L5.74408 10.4807V4.31148C5.74408 4.03534 5.96794 3.81148 6.24408 3.81148C6.52023 3.81148 6.74408 4.03534 6.74408 4.31148V11.6878C6.74408 11.8901 6.62226 12.0724 6.43543 12.1498C6.24859 12.2272 6.03353 12.1844 5.89053 12.0414L4.48551 10.6364C4.29025 10.4411 4.29025 10.1245 4.48551 9.92925ZM10.8079 6.06944C11.0032 6.2647 11.3197 6.2647 11.515 6.06944C11.7103 5.87418 11.7103 5.5576 11.515 5.36233L10.11 3.95732C9.96699 3.81432 9.75193 3.77154 9.56509 3.84893C9.37825 3.92632 9.25643 4.10864 9.25643 4.31087V11.6872C9.25643 11.9634 9.48029 12.1872 9.75643 12.1872C10.0326 12.1872 10.2564 11.9634 10.2564 11.6872V5.51798L10.8079 6.06944Z"
            fill="currentColor"
        />
    </s.Svg>
);