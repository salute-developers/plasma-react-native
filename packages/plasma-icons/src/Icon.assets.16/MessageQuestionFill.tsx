import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MessageQuestionFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.05124 2.04999C4.79355 2.04999 2.15267 4.69087 2.15267 7.94856C2.15267 8.64942 2.2751 9.3227 2.50013 9.94751C2.63521 10.3226 2.67411 10.691 2.58332 11.0152L2.08448 12.7968C1.89367 13.4782 2.52159 14.1061 3.20302 13.9153L4.9846 13.4165C5.30884 13.3257 5.67723 13.3646 6.05228 13.4997C6.67709 13.7247 7.35037 13.8471 8.05124 13.8471C11.3089 13.8471 13.9498 11.2062 13.9498 7.94856C13.9498 4.69087 11.3089 2.04999 8.05124 2.04999ZM6.91374 5.44842C6.70684 5.60934 6.51064 5.91933 6.51064 6.58759C6.51064 6.82231 6.32036 7.01259 6.08564 7.01259C5.85092 7.01259 5.66064 6.82231 5.66064 6.58759C5.66064 5.74339 5.91819 5.14591 6.39189 4.77747C6.84399 4.42584 7.41384 4.34764 7.90059 4.34764C8.38733 4.34764 8.95719 4.42584 9.40929 4.77747C9.88299 5.14591 10.1405 5.74339 10.1405 6.58759C10.1405 7.5665 9.52346 8.05693 9.06306 8.40223C8.55429 8.78381 8.32559 8.95819 8.32559 9.31C8.32559 9.54472 8.13531 9.735 7.90059 9.735C7.66587 9.735 7.47559 9.54472 7.47559 9.31C7.47559 8.51574 8.05706 8.08774 8.45975 7.79132C8.49214 7.76748 8.52338 7.74449 8.55306 7.72223C9.00013 7.38693 9.29053 7.12113 9.29053 6.58759C9.29053 5.91933 9.09434 5.60934 8.88744 5.44842C8.65893 5.27069 8.32131 5.19764 7.90059 5.19764C7.47986 5.19764 7.14224 5.27069 6.91374 5.44842ZM8.50586 10.8223C8.50586 11.1564 8.235 11.4273 7.90088 11.4273C7.56676 11.4273 7.2959 11.1564 7.2959 10.8223C7.2959 10.4882 7.56676 10.2173 7.90088 10.2173C8.235 10.2173 8.50586 10.4882 8.50586 10.8223Z"
            fill="currentColor"
        />
    </s.Svg>
);
