import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MessageRequestFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.15892 7.67463H7.47845L6.08654 6.28272C5.92056 6.11674 5.92056 5.84765 6.08654 5.68168C6.25251 5.5157 6.52161 5.5157 6.68758 5.68168L8.80501 7.79911C8.97099 7.96509 8.97099 8.23418 8.80501 8.40015L6.68758 10.5176C6.52161 10.6836 6.25251 10.6836 6.08654 10.5176C5.92056 10.3516 5.92056 10.0825 6.08654 9.91655L7.47845 8.52463H2.18047C2.22843 9.01899 2.33748 9.49591 2.50013 9.94751C2.63521 10.3226 2.67411 10.691 2.58332 11.0152L2.08448 12.7968C1.89367 13.4782 2.52159 14.1061 3.20302 13.9153L4.9846 13.4165C5.30884 13.3257 5.67723 13.3646 6.05228 13.4997C6.67709 13.7247 7.35037 13.8471 8.05124 13.8471C11.3089 13.8471 13.9498 11.2062 13.9498 7.94856C13.9498 4.69087 11.3089 2.04999 8.05124 2.04999C4.88536 2.04999 2.30202 4.54411 2.15892 7.67463Z"
            fill="currentColor"
        />
    </s.Svg>
);