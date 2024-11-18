import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Battery20Outline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V4.04511C15.5244 4.0892 15.9144 4.17638 16.2528 4.34878C16.8549 4.65557 17.3444 5.14511 17.6512 5.74723C18 6.43175 18 7.32783 18 9.12V16.88C18 18.6722 18 19.5683 17.6512 20.2528C17.3444 20.8549 16.8549 21.3444 16.2528 21.6512C15.5683 22 14.6722 22 12.88 22H11.12C9.32783 22 8.43175 22 7.74723 21.6512C7.14511 21.3444 6.65557 20.8549 6.34878 20.2528C6 19.5683 6 18.6722 6 16.88V9.12C6 7.32783 6 6.43175 6.34878 5.74723C6.65557 5.14511 7.14511 4.65557 7.74723 4.34878C8.08558 4.17638 8.47561 4.0892 9 4.04511V3ZM9.5 5.5C8.39543 5.5 7.5 6.39543 7.5 7.5V18.5C7.5 19.6046 8.39543 20.5 9.5 20.5H14.5C15.6046 20.5 16.5 19.6046 16.5 18.5V7.5C16.5 6.39543 15.6046 5.5 14.5 5.5H9.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M8.99951 19.5C8.72337 19.5 8.49951 19.2761 8.49951 19V18.5C8.49951 18.2239 8.72337 18 8.99951 18H14.9995C15.2757 18 15.4995 18.2239 15.4995 18.5V19C15.4995 19.2761 15.2757 19.5 14.9995 19.5H8.99951Z"
            fill="currentColor"
        />
        <s.Path
            d="M8.99951 17.2002C8.72337 17.2002 8.49951 16.9763 8.49951 16.7002V16.2002C8.49951 15.9241 8.72337 15.7002 8.99951 15.7002H14.9995C15.2757 15.7002 15.4995 15.9241 15.4995 16.2002V16.7002C15.4995 16.9763 15.2757 17.2002 14.9995 17.2002H8.99951Z"
            fill="currentColor"
        />
    </s.Svg>
);
