import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CopyFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            d="M19.4548 7.11228C19.4994 7.65829 19.5 8.35753 19.5 9.35V16.25C19.5 16.6642 19.8358 17 20.25 17C20.6642 17 21 16.6642 21 16.25V6.12108C21 5.72572 21 5.38466 20.9771 5.10373C20.9528 4.80722 20.8994 4.51231 20.7548 4.22852C20.539 3.80516 20.1948 3.46095 19.7715 3.24524C19.4877 3.10064 19.1928 3.04716 18.8963 3.02293C18.6154 2.99998 18.2743 2.99999 17.879 3H7.75C7.33579 3 7 3.33579 7 3.75C7 4.16422 7.33579 4.5 7.75 4.5H14.65C15.6425 4.5 16.3417 4.50059 16.8877 4.5452C17.425 4.58909 17.7475 4.67185 17.9985 4.79973C18.5159 5.06339 18.9366 5.48408 19.2003 6.00153C19.3282 6.25252 19.4109 6.57503 19.4548 7.11228Z"
            fill="currentColor"
        />
        <s.Path
            d="M14.8789 6H6.12109C5.72573 5.99999 5.38466 5.99998 5.10373 6.02293C4.80722 6.04715 4.51231 6.10064 4.22852 6.24524C3.80516 6.46095 3.46095 6.80516 3.24524 7.22852C3.10064 7.51231 3.04715 7.80722 3.02293 8.10373C2.99998 8.38465 2.99999 8.72572 3 9.12107V17.8789C2.99999 18.2743 2.99998 18.6154 3.02293 18.8963C3.04715 19.1928 3.10064 19.4877 3.24524 19.7715C3.46095 20.1948 3.80516 20.5391 4.22852 20.7548C4.51231 20.8994 4.80722 20.9528 5.10373 20.9771C5.38466 21 5.72572 21 6.12108 21H14.8789C15.2743 21 15.6153 21 15.8963 20.9771C16.1928 20.9528 16.4877 20.8994 16.7715 20.7548C17.1948 20.5391 17.5391 20.1948 17.7548 19.7715C17.8994 19.4877 17.9528 19.1928 17.9771 18.8963C18 18.6153 18 18.2743 18 17.8789V9.12108C18 8.72572 18 8.38466 17.9771 8.10373C17.9528 7.80722 17.8994 7.51231 17.7548 7.22852C17.5391 6.80516 17.1948 6.46095 16.7715 6.24524C16.4877 6.10064 16.1928 6.04715 15.8963 6.02293C15.6153 5.99998 15.2743 5.99999 14.8789 6Z"
            fill="currentColor"
        />
    </s.Svg>
);