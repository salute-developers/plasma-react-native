import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MobileWavesFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5 12C20.5376 12 23 9.53757 23 6.5C23 3.46243 20.5376 1 17.5 1C14.4624 1 12 3.46243 12 6.5C12 9.53757 14.4624 12 17.5 12ZM15.7118 5.8437C15.3117 5.7365 14.9004 5.97393 14.7932 6.37403C14.686 6.77413 14.9234 7.18539 15.3235 7.29259C15.5893 7.36381 15.8242 7.52074 15.9917 7.73905C16.1592 7.95735 16.25 8.22483 16.25 8.5C16.25 8.91421 16.5858 9.25 17 9.25C17.4142 9.25 17.75 8.91421 17.75 8.5C17.75 7.89463 17.5502 7.30618 17.1817 6.82591C16.8132 6.34563 16.2965 6.00038 15.7118 5.8437ZM15.5697 3.52626C15.6769 3.12616 16.0881 2.88872 16.4882 2.99593C17.7109 3.32353 18.7912 4.04542 19.5618 5.04962C20.3323 6.05382 20.75 7.28423 20.75 8.55C20.75 8.96421 20.4142 9.3 20 9.3C19.5858 9.3 19.25 8.96421 19.25 8.55C19.25 7.61443 18.9413 6.705 18.3718 5.96276C17.8022 5.22053 17.0037 4.68696 16.1 4.44482C15.6999 4.33761 15.4624 3.92636 15.5697 3.52626Z"
            fill="currentColor"
        />
        <s.Path
            d="M9.6 2H12.8096C12.1366 2.70126 11.6194 3.55313 11.3135 4.5H9.75C9.33579 4.5 9 4.83579 9 5.25C9 5.66421 9.33579 6 9.75 6H11.0189C11.0064 6.16502 11 6.33176 11 6.5C11 10.0899 13.9101 13 17.5 13C17.6682 13 17.835 12.9936 18 12.9811V18.4C18 19.6601 18 20.2902 17.7548 20.7715C17.539 21.1948 17.1948 21.539 16.7715 21.7548C16.2902 22 15.6601 22 14.4 22H9.6C8.33988 22 7.70982 22 7.22852 21.7548C6.80516 21.539 6.46095 21.1948 6.24524 20.7715C6 20.2902 6 19.6601 6 18.4V5.6C6 4.33988 6 3.70982 6.24524 3.22852C6.46095 2.80516 6.80516 2.46095 7.22852 2.24524C7.70982 2 8.33988 2 9.6 2Z"
            fill="currentColor"
        />
    </s.Svg>
);