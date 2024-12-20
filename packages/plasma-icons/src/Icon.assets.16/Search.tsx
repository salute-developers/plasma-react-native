import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Search: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.75 2.25C4.26472 2.25 2.25 4.26472 2.25 6.75C2.25 9.23528 4.26472 11.25 6.75 11.25C9.23528 11.25 11.25 9.23528 11.25 6.75C11.25 4.26472 9.23528 2.25 6.75 2.25ZM1.25 6.75C1.25 3.71243 3.71243 1.25 6.75 1.25C9.78757 1.25 12.25 3.71243 12.25 6.75C12.25 8.08875 11.7717 9.31578 10.9766 10.2695L14.6036 13.8964C14.7988 14.0917 14.7988 14.4083 14.6036 14.6036C14.4083 14.7988 14.0917 14.7988 13.8964 14.6036L10.2695 10.9766C9.31578 11.7717 8.08875 12.25 6.75 12.25C3.71243 12.25 1.25 9.78757 1.25 6.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
