import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MoneybagFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.60132 1.5C3.40899 1.5 3.23188 1.60322 3.13904 1.76942C3.0462 1.93563 3.05233 2.1385 3.15503 2.29895L4.65709 4.64564H11.3429L12.845 2.29895C12.9477 2.1385 12.9538 1.93563 12.861 1.76942C12.7681 1.60322 12.591 1.5 12.3987 1.5H3.60132ZM11.9811 5.64564H4.01891C3.00486 6.41815 2.24947 7.52047 1.92749 8.81777L1.86808 9.05712C1.24375 11.5726 3.17402 14 5.79872 14H10.2013C12.826 14 14.7563 11.5726 14.1319 9.05712L14.0725 8.81777C13.7505 7.52047 12.9951 6.41815 11.9811 5.64564Z"
            fill="currentColor"
        />
    </s.Svg>
);
