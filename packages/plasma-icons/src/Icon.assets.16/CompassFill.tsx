import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CompassFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM10.9334 4.10734C11.0967 4.23038 11.1686 4.44044 11.115 4.63774L10.0265 8.64453C9.89855 9.11534 9.59444 9.51891 9.17712 9.77163L5.62558 11.9224C5.4507 12.0283 5.22896 12.0171 5.06567 11.894C4.90239 11.771 4.83047 11.5609 4.88407 11.3636L5.97259 7.35684C6.10049 6.88603 6.4046 6.48246 6.82192 6.22974L10.3735 4.07897C10.5483 3.97306 10.7701 3.98429 10.9334 4.10734ZM6.93761 7.619C6.9679 7.5075 7.01906 7.40395 7.08736 7.31332L8.91169 8.68805C8.84339 8.77868 8.75796 8.8564 8.65912 8.91625L6.1768 10.4195L6.93761 7.619Z"
            fill="currentColor"
        />
    </s.Svg>
);
