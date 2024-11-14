import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const EyeFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.87907 6.85361C2.35079 4.54229 4.9893 3 7.99998 3C11.0107 3 13.6492 4.54234 15.1209 6.85372L15.1318 6.87073C15.2744 7.09452 15.3887 7.27395 15.4606 7.58405C15.4908 7.7141 15.5 7.87105 15.5 8.00006C15.5 8.12906 15.4908 8.28602 15.4606 8.41607C15.3886 8.72618 15.2743 8.9056 15.1318 9.12939L15.1209 9.14639C13.6492 11.4577 11.0107 13 8.00003 13C4.98931 13 2.35076 11.4577 0.879051 9.14628L0.86822 9.12927C0.725648 8.90548 0.611343 8.72606 0.539402 8.41595C0.509234 8.28591 0.5 8.12895 0.5 7.99994C0.5 7.87094 0.509238 7.71398 0.539409 7.58394C0.611354 7.27383 0.725662 7.09441 0.868239 6.87062L0.87907 6.85361ZM3.90809 8C3.90809 5.80989 5.74006 4.03448 7.99998 4.03448C10.2599 4.03448 12.092 5.80992 12.092 8C12.092 10.1901 10.26 11.9655 8.00003 11.9655C5.7401 11.9655 3.90809 10.1901 3.90809 8ZM8.00008 10.7586C9.5722 10.7586 10.8467 9.52354 10.8467 8C10.8467 6.47646 9.5722 5.24138 8.00008 5.24138C6.42795 5.24138 5.15349 6.47646 5.15349 8C5.15349 9.52354 6.42795 10.7586 8.00008 10.7586Z"
            fill="currentColor"
        />
    </s.Svg>
);