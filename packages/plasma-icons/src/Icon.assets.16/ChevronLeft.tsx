import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ChevronLeft: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6213 3.12838C10.8264 3.3334 10.8264 3.66582 10.6213 3.87084L6.49256 7.99961L10.6213 12.1284C10.8264 12.3334 10.8264 12.6658 10.6213 12.8708C10.4163 13.0759 10.0839 13.0759 9.87887 12.8708L5.37887 8.37084C5.17384 8.16582 5.17384 7.8334 5.37887 7.62838L9.87887 3.12838C10.0839 2.92335 10.4163 2.92335 10.6213 3.12838Z"
            fill="currentColor"
        />
    </s.Svg>
);
