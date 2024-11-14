import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const WatchRoundFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.35441 1C5.78595 1 5.29217 1.39108 5.16197 1.94443L4.58896 4.37975L4.59603 4.38142C3.61525 5.27743 3 6.56687 3 8C3 9.43313 3.61525 10.7226 4.59603 11.6186L4.58896 11.6202L5.16197 14.0556C5.29217 14.6089 5.78595 15 6.35441 15H9.44559C10.0141 15 10.5078 14.6089 10.638 14.0556L11.211 11.6202L11.204 11.6186C11.9381 10.9479 12.4674 10.0568 12.6872 9.05H13.325C13.4216 9.05 13.5 8.97165 13.5 8.875V7.125C13.5 7.02835 13.4216 6.95 13.325 6.95H12.6872C12.4674 5.9432 11.9381 5.0521 11.204 4.38142L11.211 4.37975L10.638 1.94443C10.5078 1.39108 10.0141 1 9.44559 1H6.35441ZM7.9 4.15C5.7737 4.15 4.05 5.8737 4.05 8C4.05 10.1263 5.7737 11.85 7.9 11.85C10.0263 11.85 11.75 10.1263 11.75 8C11.75 5.8737 10.0263 4.15 7.9 4.15Z"
            fill="currentColor"
        />
    </s.Svg>
);