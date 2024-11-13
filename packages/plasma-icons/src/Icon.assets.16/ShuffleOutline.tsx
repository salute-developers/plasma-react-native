import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ShuffleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0924 2.64321C12.8953 2.44975 12.5788 2.45266 12.3853 2.64971C12.1918 2.84676 12.1948 3.16333 12.3918 3.35679L13.2754 4.22428H11.5127C10.3633 4.22428 9.47005 4.73582 8.72696 5.43871C8.21036 5.92736 7.74675 6.52818 7.30716 7.1379C6.16396 5.55298 4.75449 3.87988 2.38009 3.87988L1.50232 3.8799C1.22618 3.87991 1.00194 4.10378 1.00195 4.37992C1.00196 4.65606 1.22583 4.87991 1.50197 4.8799L2.38009 4.87988C4.32577 4.87988 5.4797 6.29357 6.69464 8.00065C5.4797 9.70772 4.32577 11.1214 2.38009 11.1214H1.50225C1.2261 11.1214 1.00195 11.3453 1.00195 11.6214C1.00195 11.8975 1.22581 12.1214 1.50195 12.1214H2.38009C4.75449 12.1214 6.16396 10.4483 7.30716 8.86339C7.74675 9.47311 8.21036 10.0739 8.72696 10.5626C9.47005 11.2655 10.3633 11.777 11.5127 11.777H13.2754L12.3918 12.6445C12.1948 12.838 12.1918 13.1545 12.3853 13.3516C12.5788 13.5486 12.8953 13.5515 13.0924 13.3581L14.8487 11.6338C14.9444 11.5398 14.9984 11.4112 14.9984 11.277C14.9984 11.1428 14.9444 11.0142 14.8487 10.9202L13.0924 9.19595C12.8953 9.00249 12.5788 9.0054 12.3853 9.20245C12.1918 9.3995 12.1948 9.71607 12.3918 9.90953L13.2754 10.777H11.5127C10.6979 10.777 10.0382 10.4264 9.41414 9.8361C8.88844 9.33884 8.41722 8.70068 7.92002 8.00064C8.41722 7.30061 8.88844 6.66245 9.41414 6.1652C10.0382 5.57488 10.6979 5.22428 11.5127 5.22428H13.2754L12.3918 6.09177C12.1948 6.28523 12.1918 6.6018 12.3853 6.79885C12.5788 6.9959 12.8953 6.99881 13.0924 6.80535L14.8487 5.08107C14.9444 4.98705 14.9984 4.85848 14.9984 4.72428C14.9984 4.59008 14.9444 4.46151 14.8487 4.36749L13.0924 2.64321Z"
            fill="currentColor"
        />
    </s.Svg>
);