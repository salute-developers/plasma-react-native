import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TableLampFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M11.25 16.4996V20.4994H7.25391C6.8397 20.4994 6.50391 20.8351 6.50391 21.2494C6.50391 21.6636 6.8397 21.9994 7.25391 21.9994H16.7461C17.1603 21.9994 17.4961 21.6636 17.4961 21.2494C17.4961 20.8351 17.1603 20.4994 16.7461 20.4994H12.75V16.4996H11.25Z"
            fill="currentColor"
        />
        <s.Path
            d="M4.72166 14.9996C4.48296 14.99 4.26234 14.867 4.12876 14.6675C3.98953 14.4596 3.96318 14.1959 4.05849 13.9646L8.54024 3.08538C8.81032 2.42979 9.44929 2.00195 10.1583 2.00195H13.8338C14.5425 2.00195 15.1811 2.42932 15.4515 3.08438L19.9413 13.9641C20.0368 14.1955 20.0106 14.4593 19.8714 14.6673C19.7378 14.867 19.5171 14.99 19.2783 14.9996H4.72166Z"
            fill="currentColor"
        />
    </s.Svg>
);
