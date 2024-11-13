import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CakeFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.04134 2.95C9.04134 3.5299 8.57497 4 7.99967 4C7.42438 4 6.95801 3.5299 6.95801 2.95C6.95801 1.9 7.99967 0.5 7.99967 0.5C7.99967 0.5 9.04134 1.9 9.04134 2.95ZM8.49981 5.40039V4.7002H7.49981V5.40039H4.00694C2.76047 5.40039 1.75 6.41894 1.75 7.67539V9.45039C3.25286 9.45039 4.381 8.26544 4.73156 7.84067L4.73547 7.83592C4.75068 7.81745 4.77677 7.78576 4.80251 7.75892C4.82545 7.735 4.90488 7.65216 5.03305 7.60846C5.16826 7.56237 5.31188 7.56805 5.44301 7.62469C5.56734 7.67839 5.6395 7.76667 5.66046 7.79232C5.68399 7.8211 5.70798 7.85535 5.72169 7.87498L5.72523 7.88004C5.85458 8.06479 6.13379 8.42285 6.53446 8.73079C6.93414 9.03797 7.42778 9.27539 8 9.27539C8.57222 9.27539 9.06586 9.03797 9.46554 8.73079C9.86621 8.42285 10.1454 8.06479 10.2748 7.88004L10.2783 7.87501C10.292 7.85538 10.3155 7.8217 10.339 7.79292C10.36 7.76727 10.4327 7.67839 10.557 7.62469C10.6881 7.56805 10.8317 7.56237 10.9669 7.60846C11.0951 7.65216 11.174 7.73445 11.197 7.75837C11.2227 7.7852 11.2493 7.81743 11.2645 7.83591L11.2684 7.84067C11.619 8.26544 12.7471 9.45039 14.25 9.45039V7.67539C14.25 6.41894 13.2395 5.40039 11.9931 5.40039H8.49981ZM14.25 10.4504C12.6283 10.4504 11.4058 9.44051 10.8074 8.82295C10.6241 9.03793 10.3785 9.29035 10.0749 9.52367C9.56354 9.9167 8.86075 10.2754 8 10.2754C7.13925 10.2754 6.43646 9.9167 5.92509 9.52367C5.6215 9.29035 5.3759 9.03793 5.1926 8.82295C4.59424 9.44051 3.37174 10.4504 1.75 10.4504V12.2254C1.75 13.4818 2.76047 14.5004 4.00694 14.5004H11.9931C13.2395 14.5004 14.25 13.4818 14.25 12.2254V10.4504Z"
            fill="currentColor"
        />
    </s.Svg>
);