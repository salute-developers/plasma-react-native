import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ClockCircleFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM19.125 11.25C19.125 10.6287 18.6213 10.125 18 10.125C17.3787 10.125 16.875 10.6287 16.875 11.25V18.75C16.875 19.1261 17.063 19.4774 17.376 19.6861L21.876 22.6861C22.3929 23.0307 23.0914 22.891 23.4361 22.374C23.7807 21.8571 23.641 21.1586 23.124 20.8139L19.125 18.1479V11.25Z"
            fill="currentColor"
        />
    </s.Svg>
);
