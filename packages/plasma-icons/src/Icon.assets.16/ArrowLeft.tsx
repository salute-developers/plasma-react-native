import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const ArrowLeft: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.59844 4.16662C7.78256 4.37242 7.76499 4.68852 7.55919 4.87264L4.80876 7.33334H12.7502C13.0263 7.33334 13.2502 7.5572 13.2502 7.83334C13.2502 8.10948 13.0263 8.33334 12.7502 8.33334H4.7209L7.57652 11.1436C7.77334 11.3373 7.77587 11.6539 7.58218 11.8507C7.38848 12.0475 7.07191 12.0501 6.87509 11.8564L3.14929 8.18971C3.05084 8.09283 2.99686 7.95954 3.00014 7.82145C3.00342 7.68337 3.06368 7.5528 3.16662 7.4607L6.89242 4.12737C7.09823 3.94325 7.41432 3.96082 7.59844 4.16662Z"
            fill="currentColor"
        />
    </s.Svg>
);
