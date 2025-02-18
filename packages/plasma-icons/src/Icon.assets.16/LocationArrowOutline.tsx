import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LocationArrowOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9992 2.88612C12.6809 2.63289 13.3452 3.29714 13.0919 3.97889L9.17127 14.5345C8.87696 15.3269 7.73211 15.2507 7.54544 14.4263L6.4389 9.53915L1.55179 8.4326C0.727397 8.24594 0.65116 7.10109 1.44354 6.80678L11.9992 2.88612ZM12.0406 3.93749L2.26439 7.56864L6.75201 8.58473C7.07149 8.65707 7.32098 8.90656 7.39331 9.22604L8.40941 13.7137L12.0406 3.93749Z"
            fill="currentColor"
        />
    </s.Svg>
);
