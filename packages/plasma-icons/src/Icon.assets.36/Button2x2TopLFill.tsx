import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Button2x2TopLFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.375 3.125C4.58007 3.125 3.125 4.58007 3.125 6.375V13.125C3.125 14.9199 4.58007 16.375 6.375 16.375H13.125C14.9199 16.375 16.375 14.9199 16.375 13.125V6.375C16.375 4.58007 14.9199 3.125 13.125 3.125H6.375ZM5.125 6.375C5.125 5.68464 5.68464 5.125 6.375 5.125H13.125C13.8154 5.125 14.375 5.68464 14.375 6.375V13.125C14.375 13.8154 13.8154 14.375 13.125 14.375H6.375C5.68464 14.375 5.125 13.8154 5.125 13.125V6.375ZM23.625 4.5C22.1753 4.5 21 5.67525 21 7.125V12.375C21 13.8247 22.1753 15 23.625 15H28.875C30.3247 15 31.5 13.8247 31.5 12.375V7.125C31.5 5.67525 30.3247 4.5 28.875 4.5H23.625ZM21 23.625C21 22.1753 22.1753 21 23.625 21H28.875C30.3247 21 31.5 22.1753 31.5 23.625V28.875C31.5 30.3247 30.3247 31.5 28.875 31.5H23.625C22.1753 31.5 21 30.3247 21 28.875V23.625ZM7.125 21C5.67525 21 4.5 22.1753 4.5 23.625V28.875C4.5 30.3247 5.67525 31.5 7.125 31.5H12.375C13.8247 31.5 15 30.3247 15 28.875V23.625C15 22.1753 13.8247 21 12.375 21H7.125Z"
            fill="currentColor"
        />
    </s.Svg>
);
