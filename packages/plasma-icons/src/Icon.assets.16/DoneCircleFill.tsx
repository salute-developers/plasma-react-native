import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const DoneCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.9865 6.40329C12.2645 6.1346 12.272 5.69144 12.0033 5.41348C11.7346 5.13552 11.2914 5.12801 11.0135 5.39671L6.43103 9.82641L4.98652 8.43004C4.70856 8.16135 4.2654 8.16886 3.99671 8.44682C3.72801 8.72478 3.73552 9.16793 4.01348 9.43663L5.94452 11.3033C6.21584 11.5656 6.64623 11.5656 6.91755 11.3033L11.9865 6.40329Z"
            fill="currentColor"
        />
    </s.Svg>
);
