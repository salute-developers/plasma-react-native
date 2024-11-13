import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ClockCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 7.5C12.75 7.08579 12.4142 6.75 12 6.75C11.5858 6.75 11.25 7.08579 11.25 7.5V12.5C11.25 12.7508 11.3753 12.9849 11.584 13.124L14.584 15.124C14.9286 15.3538 15.3943 15.2607 15.624 14.916C15.8538 14.5714 15.7607 14.1057 15.416 13.876L12.75 12.0986V7.5Z"
            fill="currentColor"
        />
    </s.Svg>
);
