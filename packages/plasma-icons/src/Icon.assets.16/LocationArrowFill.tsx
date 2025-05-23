import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LocationArrowFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M12.1733 3.35483C12.454 3.25056 12.7275 3.52407 12.6232 3.80479L8.70256 14.3604C8.58137 14.6867 8.10996 14.6553 8.0331 14.3158L6.93003 9.44411C6.88535 9.24679 6.73126 9.09269 6.53393 9.04801L1.66221 7.94495C1.32275 7.86809 1.29136 7.39668 1.61763 7.27549L12.1733 3.35483Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9992 2.88612C12.6809 2.63289 13.3452 3.29714 13.0919 3.97889L9.17127 14.5345C8.87696 15.3269 7.73211 15.2507 7.54544 14.4263L6.44238 9.55453C6.44025 9.54513 6.43291 9.5378 6.42352 9.53567L1.55179 8.4326C0.727397 8.24594 0.65116 7.10109 1.44354 6.80678L11.9992 2.88612ZM12.0406 3.93749L2.26439 7.56864L6.64435 8.56036C7.02961 8.64759 7.33046 8.94844 7.41769 9.3337L8.40941 13.7137L12.0406 3.93749Z"
            fill="currentColor"
        />
    </s.Svg>
);
