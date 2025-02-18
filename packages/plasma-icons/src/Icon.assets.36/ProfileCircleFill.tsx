import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ProfileCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM23.2504 15C23.2504 17.8995 20.8999 20.25 18.0004 20.25C15.1009 20.25 12.7504 17.8995 12.7504 15C12.7504 12.1005 15.1009 9.75 18.0004 9.75C20.8999 9.75 23.2504 12.1005 23.2504 15ZM27.6684 26.313C25.5404 23.9523 21.938 22.5 18.0008 22.5C14.0636 22.5 10.4613 23.9523 8.33327 26.313C10.6715 29.0297 14.1353 30.75 18.0008 30.75C21.8664 30.75 25.3302 29.0297 27.6684 26.313Z"
            fill="currentColor"
        />
    </s.Svg>
);
