import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ProfileCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10ZM18.445 17.542C17.0263 15.9682 14.6248 15 12 15C9.37518 15 6.97361 15.9682 5.55493 17.542C7.11374 19.3532 9.42292 20.5 12 20.5C14.577 20.5 16.8862 19.3532 18.445 17.542Z"
            fill="currentColor"
        />
    </s.Svg>
);
