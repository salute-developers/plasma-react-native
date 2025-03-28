import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const BulbSberOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10ZM12 3.5C8.41015 3.5 5.5 6.41015 5.5 10C5.5 13.5899 8.41015 16.5 12 16.5C15.5899 16.5 18.5 13.5899 18.5 10C18.5 9.62539 18.4683 9.25819 18.4075 8.90092L14.572 11.7279L11.0823 9.54031V6.90862L14.572 9.09619L17.6674 6.81478C16.553 4.83626 14.4326 3.5 12 3.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M8.5 19.5C8.5 19.1645 8.84824 18.971 9.16848 19.0708C10.0628 19.3497 11.0138 19.5 12 19.5C12.9861 19.5 13.9372 19.3497 14.8315 19.0708C15.1518 18.971 15.5 19.1645 15.5 19.5C15.5 21.433 13.933 23 12 23C10.067 23 8.5 21.433 8.5 19.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
