import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowDown: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.631 6.75C18.1832 6.75 18.631 7.19772 18.631 7.75V25.827L25.0411 19.3836C25.4306 18.992 26.0637 18.9904 26.4553 19.3799C26.8468 19.7694 26.8485 20.4026 26.4589 20.7941L18.3399 28.9554C18.1464 29.1499 17.8815 29.2564 17.6072 29.2498C17.3329 29.2433 17.0733 29.1244 16.8893 28.9209L9.50833 20.7596C9.13788 20.35 9.16963 19.7176 9.57925 19.3472C9.98886 18.9767 10.6212 19.0085 10.9917 19.4181L16.631 25.6536V7.75C16.631 7.19772 17.0787 6.75 17.631 6.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
