import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const HeartOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6.07896C1 4.33576 2.51832 2.25 4.98781 2.25C5.72353 2.25 6.38016 2.53403 6.93737 2.91258C7.32894 3.1786 7.68455 3.50014 8 3.82636C8.31545 3.50014 8.67105 3.1786 9.06262 2.91258C9.61983 2.53403 10.2765 2.25 11.0122 2.25C13.4817 2.25 15 4.33576 15 6.07896C15 7.57944 14.2747 8.98735 13.2904 10.2273C12.3022 11.4722 11.0118 12.5996 9.78924 13.5474C9.76767 13.5642 9.74638 13.5807 9.72535 13.597C9.28925 13.9356 8.96423 14.1879 8.55246 14.2991C8.20773 14.3922 7.79227 14.3922 7.44754 14.2991C7.03577 14.1879 6.71075 13.9356 6.27465 13.597C6.25362 13.5807 6.23233 13.5642 6.21076 13.5474C4.98817 12.5996 3.6978 11.4722 2.70959 10.2273C1.72532 8.98735 1 7.57944 1 6.07896ZM4.98781 3.25C3.13443 3.25 2 4.82198 2 6.07896C2 7.25655 2.57343 8.44736 3.49282 9.60558C4.40828 10.7588 5.62647 11.8291 6.82348 12.7571C7.35132 13.1664 7.51335 13.2811 7.70829 13.3337C7.88225 13.3807 8.11775 13.3807 8.29171 13.3337C8.48665 13.2811 8.64868 13.1664 9.17652 12.7571C10.3735 11.8291 11.5917 10.7588 12.5072 9.60558C13.4266 8.44736 14 7.25655 14 6.07896C14 4.82198 12.8656 3.25 11.0122 3.25C10.5408 3.25 10.0782 3.43156 9.62457 3.73975C9.16994 4.04861 8.75107 4.46659 8.37634 4.89499L8 5.32522L7.62366 4.89499C7.24893 4.4666 6.83005 4.04861 6.37542 3.73975C5.92177 3.43156 5.45921 3.25 4.98781 3.25Z"
            fill="currentColor"
        />
    </s.Svg>
);
