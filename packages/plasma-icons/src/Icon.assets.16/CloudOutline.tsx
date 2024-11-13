import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CloudOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.02928 5.6335C2.27974 6.08608 1 7.71154 1 9.62931C1 11.8908 2.78286 13.75 5.01351 13.75H11.8649C13.6104 13.75 15 12.2961 15 10.5345C15 9.26019 14.2755 8.15089 13.2146 7.63144C13.2335 7.4551 13.2432 7.27605 13.2432 7.09483C13.2432 4.43337 11.1458 2.25 8.52703 2.25C6.40899 2.25 4.63046 3.68018 4.02928 5.6335ZM5.13968 5.51061C7.31102 5.57914 9.02703 7.41059 9.02703 9.62931C9.02703 9.90545 8.80317 10.1293 8.52703 10.1293C8.25088 10.1293 8.02703 9.90545 8.02703 9.62931C8.02703 7.89153 6.66378 6.50862 5.01351 6.50862C4.84378 6.50862 4.6777 6.5231 4.51624 6.55083C3.09929 6.79421 2 8.07065 2 9.62931C2 11.3671 3.36325 12.75 5.01351 12.75H11.8649C13.03 12.75 14 11.7723 14 10.5345C14 9.5356 13.3652 8.7013 12.5071 8.42083C12.2677 8.34256 12.1238 8.09837 12.1715 7.85099C12.2185 7.60691 12.2432 7.35411 12.2432 7.09483C12.2432 4.95712 10.5654 3.25 8.52703 3.25C7.0281 3.25 5.72536 4.17155 5.13968 5.51061Z"
            fill="currentColor"
        />
    </s.Svg>
);