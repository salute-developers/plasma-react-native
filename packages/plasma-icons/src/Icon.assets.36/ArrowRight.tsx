import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowRight: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.3472 9.57925C19.7176 9.16963 20.35 9.13788 20.7596 9.50833L28.9209 16.8893C29.1244 17.0733 29.2433 17.3329 29.2498 17.6072C29.2564 17.8815 29.1499 18.1464 28.9554 18.3399L20.7941 26.4589C20.4026 26.8485 19.7694 26.8468 19.3799 26.4553C18.9904 26.0637 18.992 25.4306 19.3836 25.0411L25.827 18.631H7.75C7.19772 18.631 6.75 18.1832 6.75 17.631C6.75 17.0787 7.19772 16.631 7.75 16.631H25.6536L19.4181 10.9917C19.0085 10.6212 18.9767 9.98886 19.3472 9.57925Z"
            fill="currentColor"
        />
    </s.Svg>
);
