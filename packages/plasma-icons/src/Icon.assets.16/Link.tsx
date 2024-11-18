import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Link: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.10955 12.6955C2.0351 11.621 2.0351 9.87899 3.10955 8.80454L4.56148 7.35261C4.75675 7.15734 4.75675 6.84076 4.56148 6.6455C4.36622 6.45024 4.04964 6.45024 3.85438 6.6455L2.40244 8.09743C0.937467 9.56241 0.937467 11.9376 2.40244 13.4026C3.86742 14.8676 6.24262 14.8675 7.70759 13.4026L9.15952 11.9506C9.35479 11.7554 9.35479 11.4388 9.15952 11.2435C8.96426 11.0483 8.64768 11.0483 8.45242 11.2435L7.00048 12.6955C5.92603 13.7699 4.184 13.7699 3.10955 12.6955ZM6.60508 3.8948C6.40981 4.09006 6.40981 4.40665 6.60508 4.60191C6.80034 4.79717 7.11692 4.79717 7.31218 4.60191L8.76412 3.14998C9.83857 2.07553 11.5806 2.07553 12.6551 3.14998C13.7295 4.22443 13.7295 5.96646 12.6551 7.04091L11.2031 8.49284C11.0079 8.6881 11.0079 9.00468 11.2031 9.19994C11.3984 9.39521 11.715 9.39521 11.9102 9.19995L13.3622 7.74801C14.8271 6.28304 14.8271 3.90784 13.3622 2.44287C11.8972 0.977895 9.52199 0.977896 8.05701 2.44287L6.60508 3.8948ZM4.77905 10.3191C4.58379 10.5144 4.58379 10.831 4.77905 11.0263C4.97432 11.2215 5.2909 11.2215 5.48616 11.0263L10.9876 5.52486C11.1828 5.3296 11.1828 5.01302 10.9876 4.81776C10.7923 4.62249 10.4757 4.62249 10.2805 4.81776L4.77905 10.3191Z"
            fill="currentColor"
        />
    </s.Svg>
);
