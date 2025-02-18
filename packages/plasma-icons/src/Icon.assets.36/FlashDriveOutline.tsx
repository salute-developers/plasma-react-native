import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const FlashDriveOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.547 3C13.1663 3 12.047 4.11929 12.047 5.5V10.5737C10.3467 10.6785 9 12.0907 9 13.8175V29.7491C9 31.544 10.4551 32.9991 12.25 32.9991H23.7469C25.5418 32.9991 26.9969 31.544 26.9969 29.7491V13.8175C26.9969 12.0907 25.6502 10.6785 23.9499 10.5737V5.5C23.9499 4.11929 22.8306 3 21.4499 3H14.547ZM21.9499 10.5675V5.5C21.9499 5.22386 21.726 5 21.4499 5H14.547C14.2709 5 14.047 5.22386 14.047 5.5V10.5675H21.9499ZM24.9969 29.7491C24.9969 30.4394 24.4372 30.9991 23.7469 30.9991H12.25C11.5596 30.9991 11 30.4394 11 29.7491V13.8175C11 13.1271 11.5596 12.5675 12.25 12.5675H23.7469C24.4372 12.5675 24.9969 13.1271 24.9969 13.8175V29.7491Z"
            fill="currentColor"
        />
    </s.Svg>
);
