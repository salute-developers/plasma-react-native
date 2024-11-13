import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronUp: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8713 10.6218C12.6663 10.8268 12.3339 10.8268 12.1289 10.6218L8.0001 6.49305L3.87133 10.6218C3.6663 10.8268 3.33389 10.8268 3.12887 10.6218C2.92384 10.4168 2.92384 10.0844 3.12887 9.87935L7.62887 5.37935C7.83389 5.17433 8.1663 5.17433 8.37133 5.37935L12.8713 9.87935C13.0764 10.0844 13.0764 10.4168 12.8713 10.6218Z"
            fill="currentColor"
        />
    </s.Svg>
);
