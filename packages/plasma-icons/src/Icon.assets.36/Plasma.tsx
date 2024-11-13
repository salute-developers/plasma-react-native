import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Plasma: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 5C10.8203 5 5 10.8203 5 18C5 21.4903 6.37546 24.6593 8.6139 26.9945C8.00588 25.6781 7.66667 24.212 7.66667 22.6667C7.66667 16.9597 12.2931 12.3333 18 12.3333C23.7069 12.3333 28.3333 16.9597 28.3333 22.6667C28.3333 24.212 27.9941 25.6781 27.3861 26.9945C29.6245 24.6593 31 21.4903 31 18C31 10.8203 25.1797 5 18 5ZM23.4181 28.9984C25.2025 27.4701 26.3333 25.2004 26.3333 22.6667C26.3333 18.0643 22.6024 14.3333 18 14.3333C13.3976 14.3333 9.66667 18.0643 9.66667 22.6667C9.66667 25.2004 10.7975 27.4701 12.5819 28.9984C12.4203 28.472 12.3333 27.9128 12.3333 27.3333C12.3333 24.2037 14.8704 21.6667 18 21.6667C21.1296 21.6667 23.6667 24.2037 23.6667 27.3333C23.6667 27.9128 23.5797 28.472 23.4181 28.9984ZM18 31C20.025 31 21.6667 29.3584 21.6667 27.3333C21.6667 25.3083 20.025 23.6667 18 23.6667C15.975 23.6667 14.3333 25.3083 14.3333 27.3333C14.3333 29.3584 15.975 31 18 31ZM18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z"
            fill="currentColor"
        />
    </s.Svg>
);
