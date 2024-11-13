import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlayFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            d="M28.625 16.0504C30.125 16.9164 30.125 19.0815 28.625 19.9475L12.875 29.0408C11.375 29.9068 9.5 28.8243 9.5 27.0922L9.5 8.9057C9.5 7.17365 11.375 6.09112 12.875 6.95714L28.625 16.0504Z"
            fill="currentColor"
        />
    </s.Svg>
);
