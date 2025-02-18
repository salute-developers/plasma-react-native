import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const PowerWireDashFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.35834 1.5C6.35834 1.22386 6.13448 1 5.85834 1C5.5822 1 5.35834 1.22386 5.35834 1.5V4.38297H4.96429C4.29492 4.38297 3.75 4.92451 3.75 5.59535V8.02472C3.75 9.00301 4.17865 9.9321 4.92285 10.5683L5.62467 11.1682L11.9709 4.82197C11.748 4.55361 11.4115 4.38297 11.0357 4.38297H10.6441V1.5C10.6441 1.22386 10.4202 1 10.1441 1C9.86791 1 9.64405 1.22386 9.64405 1.5V4.38297H6.35834V1.5ZM12.25 5.95711L6.25 11.9571V15H9.75V11.8001C9.75 11.7386 9.77693 11.6798 9.82433 11.6392L11.0772 10.5683C11.8214 9.9321 12.25 9.00301 12.25 8.02472V5.95711Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4453 1.64645C14.6406 1.84171 14.6406 2.15829 14.4453 2.35355L2.56596 14.2329C2.37069 14.4282 2.05411 14.4282 1.85885 14.2329C1.66359 14.0377 1.66359 13.7211 1.85885 13.5258L13.7382 1.64645C13.9335 1.45118 14.2501 1.45118 14.4453 1.64645Z"
            fill="currentColor"
        />
    </s.Svg>
);
