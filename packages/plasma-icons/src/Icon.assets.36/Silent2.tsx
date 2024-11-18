import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Silent2: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 17.8496C3 9.56534 9.71573 2.84961 18 2.84961C20.7958 2.84961 23.4129 3.61447 25.6535 4.94636L24.7502 5.84961C22.75 7.84999 24.0002 11.0996 26.2502 11.0996H31.3991C32.4232 13.1285 33 15.4217 33 17.8496C33 26.1339 26.2843 32.8496 18 32.8496C9.71573 32.8496 3 26.1339 3 17.8496ZM16.5002 11.8496C16.5002 11.0212 17.1717 10.3496 18.0002 10.3496C18.8286 10.3496 19.5002 11.0212 19.5002 11.8496V18.4835L22.6474 20.3006C23.3648 20.7148 23.6106 21.6322 23.1964 22.3496C22.7822 23.067 21.8648 23.3129 21.1474 22.8986L17.2772 20.6642C17.2162 20.6306 17.1578 20.5928 17.1023 20.5514C16.7632 20.2976 16.5351 19.9036 16.5038 19.4554C16.5008 19.4125 16.4995 19.3694 16.5002 19.3261V11.8496Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.2 1.75C25.2 1.05964 25.7596 0.5 26.45 0.5H33.2668C34.6362 0.5 35.2664 2.20371 34.2267 3.0949L29.3791 7.25H33.425C34.1154 7.25 34.675 7.80964 34.675 8.5C34.675 9.19036 34.1154 9.75 33.425 9.75H26.6082C25.2388 9.75 24.6086 8.04629 25.6483 7.1551L30.4959 3H26.45C25.7596 3 25.2 2.44036 25.2 1.75Z"
            fill="currentColor"
        />
    </s.Svg>
);
