import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CameraVideoRecOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 8.75862C2 7.23508 3.23508 6 4.75862 6H13.0345C14.558 6 15.7931 7.23508 15.7931 8.75862V15.2414C15.7931 16.7649 14.558 18 13.0345 18H4.75862C3.23508 18 2 16.7649 2 15.2414V8.75862ZM4.75862 7.5H13.0345C13.7296 7.5 14.2931 8.06351 14.2931 8.75862V15.2414C14.2931 15.9365 13.7296 16.5 13.0345 16.5H4.75862C4.0635 16.5 3.5 15.9365 3.5 15.2414V8.75862C3.5 8.0635 4.0635 7.5 4.75862 7.5Z"
            fill="currentColor"
        />
        <s.Path
            d="M22.0002 8.7992C22.0002 7.95072 20.9744 7.5258 20.3744 8.12575L17.1487 11.3513C16.7866 11.7134 16.7756 12.2971 17.1239 12.6725L20.3496 16.1494C20.9385 16.7842 22.0002 16.3675 22.0002 15.5017V8.7992Z"
            fill="currentColor"
        />
        <s.Path
            d="M11 12C11 13.1046 10.1046 14 9 14C7.89543 14 7 13.1046 7 12C7 10.8954 7.89543 10 9 10C10.1046 10 11 10.8954 11 12Z"
            fill="currentColor"
        />
    </s.Svg>
);
