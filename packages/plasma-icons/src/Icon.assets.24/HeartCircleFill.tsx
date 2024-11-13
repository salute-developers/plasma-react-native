import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HeartCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM6 10.1842C6 8.74935 7.22434 7 9.21951 7C10.3338 7 11.2857 7.89069 12 8.73685C12.7143 7.89069 13.6662 7 14.7805 7C16.7757 7 18 8.74935 18 10.1842C18 12.9101 15.285 15.464 12.942 17.2874C12.6177 17.5398 12.4555 17.666 12.2614 17.7185C12.0968 17.7631 11.9032 17.7631 11.7386 17.7185C11.5445 17.666 11.3823 17.5398 11.058 17.2874C8.71497 15.464 6 12.9101 6 10.1842Z"
            fill="currentColor"
        />
    </s.Svg>
);
