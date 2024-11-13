import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Battery10Outline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 3C14.1716 3 13.5 3.67157 13.5 4.5V6.06767C12.7134 6.1338 12.1284 6.26457 11.6208 6.52317C10.7177 6.98336 9.98336 7.71767 9.52317 8.62085C9 9.64762 9 10.9917 9 13.68V25.32C9 28.0083 9 29.3524 9.52317 30.3792C9.98336 31.2823 10.7177 32.0166 11.6208 32.4768C12.6476 33 13.9917 33 16.68 33H19.32C22.0083 33 23.3524 33 24.3792 32.4768C25.2823 32.0166 26.0166 31.2823 26.4768 30.3792C27 29.3524 27 28.0083 27 25.32V13.68C27 10.9917 27 9.64762 26.4768 8.62085C26.0166 7.71767 25.2823 6.98336 24.3792 6.52317C23.8716 6.26457 23.2866 6.1338 22.5 6.06767V4.5C22.5 3.67157 21.8284 3 21 3H15ZM11.25 11.25C11.25 9.59315 12.5931 8.25 14.25 8.25H21.75C23.4069 8.25 24.75 9.59315 24.75 11.25V27.75C24.75 29.4069 23.4069 30.75 21.75 30.75H14.25C12.5931 30.75 11.25 29.4069 11.25 27.75V11.25ZM12.75 28.5C12.75 28.9142 13.0858 29.25 13.5 29.25H22.5C22.9142 29.25 23.25 28.9142 23.25 28.5V27.75C23.25 27.3358 22.9142 27 22.5 27H13.5C13.0858 27 12.75 27.3358 12.75 27.75V28.5Z"
            fill="currentColor"
        />
    </s.Svg>
);