import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PlusSquareFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.375 4.5C6.68261 4.5 4.5 6.68261 4.5 9.375V26.625C4.5 29.3174 6.68261 31.5 9.375 31.5H26.625C29.3174 31.5 31.5 29.3174 31.5 26.625V9.375C31.5 6.68261 29.3174 4.5 26.625 4.5H9.375ZM18 9.125C18.5523 9.125 19 9.57272 19 10.125V17H25.875C26.4273 17 26.875 17.4477 26.875 18C26.875 18.5523 26.4273 19 25.875 19H19V25.875C19 26.4273 18.5523 26.875 18 26.875C17.4477 26.875 17 26.4273 17 25.875V19H10.125C9.57272 19 9.125 18.5523 9.125 18C9.125 17.4477 9.57272 17 10.125 17H17V10.125C17 9.57272 17.4477 9.125 18 9.125Z"
            fill="currentColor"
        />
    </s.Svg>
);
