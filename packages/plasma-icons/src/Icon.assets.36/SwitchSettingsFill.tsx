import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const SwitchSettingsFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33 9.625C33 13.2839 30.0339 16.25 26.375 16.25H9.625C5.96611 16.25 3 13.2839 3 9.625C3 5.96611 5.96611 3 9.625 3H26.375C30.0339 3 33 5.96611 33 9.625ZM26.4 6.37012C24.6051 6.37012 23.15 7.82519 23.15 9.62012C23.15 11.415 24.6051 12.8701 26.4 12.8701C28.1949 12.8701 29.65 11.415 29.65 9.62012C29.65 7.82519 28.1949 6.37012 26.4 6.37012Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 26.375C3 22.7161 5.96611 19.75 9.625 19.75H26.375C30.0339 19.75 33 22.7161 33 26.375C33 30.0339 30.0339 33 26.375 33H9.625C5.96611 33 3 30.0339 3 26.375ZM9.6 29.6299C11.3949 29.6299 12.85 28.1748 12.85 26.3799C12.85 24.585 11.3949 23.1299 9.6 23.1299C7.80507 23.1299 6.35 24.585 6.35 26.3799C6.35 28.1748 7.80507 29.6299 9.6 29.6299Z"
            fill="currentColor"
        />
    </s.Svg>
);
