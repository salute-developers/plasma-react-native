import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowDown: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.95834 2.875C8.23448 2.875 8.45834 3.09886 8.45834 3.375V11.4043L11.2686 8.54868C11.4623 8.35186 11.7789 8.34933 11.9757 8.54302C12.1725 8.73672 12.1751 9.05329 11.9814 9.25011L8.31471 12.9759C8.21783 13.0744 8.08454 13.1283 7.94645 13.1251C7.80837 13.1218 7.6778 13.0615 7.5857 12.9586L4.25237 9.23278C4.06825 9.02698 4.08582 8.71088 4.29162 8.52676C4.49742 8.34264 4.81352 8.36021 4.99764 8.56601L7.45834 11.3164V3.375C7.45834 3.09886 7.6822 2.875 7.95834 2.875Z"
            fill="currentColor"
        />
    </s.Svg>
);
