import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PanelSidebarDFocusOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.05 8H28.95C30.0822 8 31 8.91782 31 10.05V25.95C31 27.0822 30.0822 28 28.95 28H7.05C5.91782 28 5 27.0822 5 25.95V10.05C5 8.91782 5.91782 8 7.05 8ZM3 10.05C3 7.81325 4.81325 6 7.05 6H28.95C31.1868 6 33 7.81325 33 10.05V25.95C33 28.1868 31.1868 30 28.95 30H7.05C4.81325 30 3 28.1868 3 25.95V10.05ZM8.25 19.5C7.83579 19.5 7.5 19.8358 7.5 20.25V24.75C7.5 25.1642 7.83579 25.5 8.25 25.5H27.75C28.1642 25.5 28.5 25.1642 28.5 24.75V20.25C28.5 19.8358 28.1642 19.5 27.75 19.5H8.25Z"
            fill="currentColor"
        />
    </s.Svg>
);