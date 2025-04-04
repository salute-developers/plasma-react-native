import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MinusCircleOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 7.99821C2 4.68561 4.68611 2 7.99987 2C11.3136 2 13.9997 4.68561 13.9997 7.99821C13.9997 11.3108 11.3136 13.9964 7.99987 13.9964C4.68611 13.9964 2 11.3108 2 7.99821ZM7.99987 1C4.13407 1 1 4.13308 1 7.99821C1 11.8633 4.13407 14.9964 7.99987 14.9964C11.8657 14.9964 14.9997 11.8633 14.9997 7.99821C14.9997 4.13308 11.8657 1 7.99987 1ZM3.78392 7.49854C3.50777 7.49854 3.28392 7.72239 3.28392 7.99854C3.28392 8.27468 3.50777 8.49854 3.78392 8.49854H12.2162C12.4923 8.49854 12.7162 8.27468 12.7162 7.99854C12.7162 7.72239 12.4923 7.49854 12.2162 7.49854H3.78392Z"
            fill="currentColor"
        />
    </s.Svg>
);
