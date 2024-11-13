import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const LocationPinFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C7.58172 2 4 5.58172 4 10C4 13.017 5.70158 15.8133 7.42311 17.8855C9.16139 19.9779 11.0235 21.4551 11.55 21.85C11.8167 22.05 12.1833 22.05 12.45 21.85C12.9765 21.4551 14.8386 19.9779 16.5769 17.8855C18.2984 15.8133 20 13.017 20 10C20 5.58172 16.4183 2 12 2ZM12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.067 6.5 8.5 8.067 8.5 10C8.5 11.933 10.067 13.5 12 13.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
