import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PcMouseOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M12.75 6.75C12.75 6.33579 12.4142 6 12 6C11.5858 6 11.25 6.33579 11.25 6.75V10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10V6.75Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9ZM17.5 9V15C17.5 18.0376 15.0376 20.5 12 20.5C8.96243 20.5 6.5 18.0376 6.5 15V9C6.5 5.96243 8.96243 3.5 12 3.5C15.0376 3.5 17.5 5.96243 17.5 9Z"
            fill="currentColor"
        />
    </s.Svg>
);
