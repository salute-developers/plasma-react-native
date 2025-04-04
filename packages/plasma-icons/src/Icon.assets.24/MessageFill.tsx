import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MessageFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2374 3.47559C7.66038 3.47559 3.94994 7.18603 3.94994 11.7631C3.94994 12.7478 4.12196 13.6938 4.43813 14.5716C4.62791 15.0986 4.68256 15.6162 4.55501 16.0717L3.85413 18.5748C3.58606 19.5323 4.46827 20.4145 5.42569 20.1464L7.92881 19.4455C8.38437 19.318 8.90195 19.3726 9.4289 19.5624C10.3068 19.8786 11.2527 20.0506 12.2374 20.0506C16.8145 20.0506 20.5249 16.3401 20.5249 11.7631C20.5249 7.18603 16.8145 3.47559 12.2374 3.47559Z"
            fill="currentColor"
        />
    </s.Svg>
);
