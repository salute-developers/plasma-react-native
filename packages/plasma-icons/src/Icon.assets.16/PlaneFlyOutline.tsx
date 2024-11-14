import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlaneFlyOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.46346 2.37294C5.31156 1.66652 5.84998 1 6.57256 1C7.23135 1 7.83556 1.3661 8.14051 1.95006L10.3673 6.21416L12.8292 6.13827C13.8799 6.10588 14.7493 6.94887 14.7493 8.00013C14.7493 9.05139 13.8799 9.89439 12.8292 9.862L10.3672 9.7861L8.14052 14.0499C7.83556 14.6339 7.23135 15 6.57256 15C5.84998 15 5.31156 14.3335 5.46346 13.6271L6.31625 9.66123L4.56528 9.60725L4.13954 10.0403C3.78234 10.4037 3.29414 10.6084 2.78458 10.6084H1.92561C1.42584 10.6084 1.09938 10.0842 1.31983 9.63565L2.12376 8L1.31983 6.36435C1.09937 5.91582 1.42584 5.3916 1.92561 5.3916H2.78458C3.29414 5.3916 3.78234 5.59627 4.13954 5.95965L4.56554 6.39301L6.31631 6.33904L5.46346 2.37294ZM3.00378 7.52342L2.44749 6.3916H2.78458C3.02595 6.3916 3.2572 6.48855 3.42641 6.66068L4.00574 7.25002C4.10349 7.34946 4.23834 7.40357 4.37771 7.39927L6.94664 7.32008C7.09493 7.31551 7.23353 7.24532 7.32497 7.12849C7.41641 7.01166 7.45125 6.86025 7.42006 6.7152L6.44111 2.16271C6.42311 2.07899 6.48692 2 6.57256 2C6.85892 2 7.12155 2.15914 7.25411 2.41297L9.6261 6.95503C9.71487 7.12502 9.89303 7.22925 10.0847 7.22334L12.86 7.13779C13.3466 7.12279 13.7493 7.51323 13.7493 8.00013C13.7493 8.48703 13.3466 8.87747 12.86 8.86247L10.0846 8.77692C9.8929 8.77101 9.71473 8.87524 9.62596 9.04523L7.25411 13.587C7.12155 13.8409 6.85892 14 6.57256 14C6.48692 14 6.42311 13.921 6.44111 13.8373L7.42 9.28506C7.45119 9.14001 7.41636 8.98861 7.32492 8.87178C7.23347 8.75494 7.09487 8.68475 6.94658 8.68018L4.37746 8.60099C4.23808 8.59669 4.10324 8.65079 4.00549 8.75024L3.42641 9.33932C3.2572 9.51145 3.02595 9.6084 2.78458 9.6084H2.44749L3.0037 8.47675C3.20549 8.4124 3.35163 8.22341 3.35163 8.00029C3.35167 7.86766 3.29901 7.74001 3.20524 7.64621C3.14831 7.58927 3.07908 7.54748 3.00378 7.52342Z"
            fill="currentColor"
        />
    </s.Svg>
);