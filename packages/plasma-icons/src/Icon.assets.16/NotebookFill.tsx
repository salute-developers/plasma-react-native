import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const NotebookFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M13.4856 10.6679C13.6 10.4433 13.6 10.1493 13.6 9.56123V5.18049C13.6 4.59243 13.6 4.29841 13.4856 4.0738C13.3849 3.87623 13.2243 3.7156 13.0267 3.61493C12.8021 3.50049 12.5081 3.50049 11.92 3.50049H4.08001C3.49195 3.50049 3.19792 3.50049 2.97332 3.61493C2.77575 3.7156 2.61512 3.87623 2.51445 4.0738C2.40001 4.29841 2.40001 4.59243 2.40001 5.18049V9.56123C2.40001 10.1493 2.40001 10.4433 2.51445 10.6679C2.61512 10.8655 2.77575 11.0261 2.97332 11.1268C3.19792 11.2412 3.49195 11.2412 4.08 11.2412H11.92C12.5081 11.2412 12.8021 11.2412 13.0267 11.1268C13.2243 11.0261 13.3849 10.8655 13.4856 10.6679Z"
            fill="currentColor"
        />
        <s.Path
            d="M1.52778 11.9453C1.23629 11.9453 1 12.1816 1 12.4731C1 12.7646 1.23629 13.0009 1.52778 13.0009H14.4722C14.7637 13.0009 15 12.7646 15 12.4731C15 12.1816 14.7637 11.9453 14.4722 11.9453H1.52778Z"
            fill="currentColor"
        />
    </s.Svg>
);