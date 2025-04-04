import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const FlashDriveFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.625 3C13.1753 3 12 4.17525 12 5.625V10.5206C10.3125 10.7071 9 12.1378 9 13.875V29.625C9 31.489 10.511 33 12.375 33H23.625C25.489 33 27 31.489 27 29.625V13.875C27 12.1378 25.6875 10.7071 24 10.5206V5.625C24 4.17525 22.8247 3 21.375 3H14.625ZM21.75 10.5V5.625C21.75 5.41789 21.5821 5.25 21.375 5.25H14.625C14.4179 5.25 14.25 5.41789 14.25 5.625V10.5H21.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
