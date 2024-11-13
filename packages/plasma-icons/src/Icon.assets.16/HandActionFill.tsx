import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HandActionFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.18144 3.10521C3.91242 2.81672 3.46144 2.80004 3.17415 3.06794C2.88686 3.33585 2.87204 3.78689 3.14106 4.07538L6.79429 7.99299C6.86154 8.06511 6.85784 8.17787 6.78601 8.24485C6.71419 8.31182 6.60144 8.30765 6.53419 8.23553L3.85515 5.36262C3.58614 5.07413 3.13516 5.05745 2.84786 5.32536C2.56057 5.59326 2.54575 6.04431 2.81477 6.33279L5.85913 9.59747C5.92638 9.66959 5.92268 9.78235 5.85085 9.84933C5.77903 9.9163 5.66629 9.91213 5.59903 9.84001L4.13774 8.27297C3.86872 7.98448 3.41775 7.9678 3.13045 8.23571C2.84316 8.50361 2.82834 8.95466 3.09736 9.24314L5.77639 12.1161C5.78098 12.121 5.78524 12.1261 5.78917 12.1314C6.93429 13.3473 8.7546 13.789 10.3764 13.1032C12.4578 12.2229 13.4247 9.81865 12.5362 7.73303L10.9273 3.95666C10.7727 3.59395 10.354 3.42401 9.99206 3.57709C9.97176 3.58567 9.95207 3.59509 9.93302 3.60528C9.68255 3.76261 9.53317 4.03795 9.62218 4.31676C9.71007 4.59204 9.77101 4.80667 9.82737 5.00611L10.6436 6.922C10.6776 7.00168 10.6495 7.094 10.5771 7.14095C10.5047 7.18791 10.4088 7.17594 10.3497 7.11256L6.21257 2.67601C5.94355 2.38752 5.49257 2.37084 5.20528 2.63875C4.91798 2.90665 4.90317 3.3577 5.17218 3.64618L7.72944 6.38851C7.7967 6.46063 7.79299 6.57339 7.72117 6.64037C7.64935 6.70735 7.5366 6.70317 7.46935 6.63105L4.18144 3.10521Z"
            fill="currentColor"
        />
    </s.Svg>
);
