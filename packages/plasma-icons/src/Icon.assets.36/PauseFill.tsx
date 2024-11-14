import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PauseFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.24524 6.72852C9 7.20982 9 7.83988 9 9.1V26.9C9 28.1601 9 28.7902 9.24524 29.2715C9.46095 29.6948 9.80516 30.039 10.2285 30.2548C10.7098 30.5 11.3399 30.5 12.6 30.5H12.9C14.1601 30.5 14.7902 30.5 15.2715 30.2548C15.6948 30.039 16.039 29.6948 16.2548 29.2715C16.5 28.7902 16.5 28.1601 16.5 26.9V9.1C16.5 7.83988 16.5 7.20982 16.2548 6.72852C16.039 6.30516 15.6948 5.96095 15.2715 5.74524C14.7902 5.5 14.1601 5.5 12.9 5.5H12.6C11.3399 5.5 10.7098 5.5 10.2285 5.74524C9.80516 5.96095 9.46095 6.30516 9.24524 6.72852ZM26.7548 29.2715C27 28.7902 27 28.1601 27 26.9V9.1C27 7.83988 27 7.20982 26.7548 6.72852C26.539 6.30516 26.1948 5.96095 25.7715 5.74524C25.2902 5.5 24.6601 5.5 23.4 5.5H23.1C21.8399 5.5 21.2098 5.5 20.7285 5.74524C20.3052 5.96095 19.961 6.30516 19.7452 6.72852C19.5 7.20982 19.5 7.83988 19.5 9.1V26.9C19.5 28.1601 19.5 28.7902 19.7452 29.2715C19.961 29.6948 20.3052 30.039 20.7285 30.2548C21.2098 30.5 21.8399 30.5 23.1 30.5H23.4C24.6601 30.5 25.2902 30.5 25.7715 30.2548C26.1948 30.039 26.539 29.6948 26.7548 29.2715Z"
            fill="currentColor"
        />
    </s.Svg>
);