import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const TrashFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.42188 3.83333C5.42188 2.68274 6.34529 1.75 7.48438 1.75H8.51562C9.65471 1.75 10.5781 2.68274 10.5781 3.83333V4.35417H12.9844C13.2691 4.35417 13.5 4.58735 13.5 4.875C13.5 5.16265 13.2691 5.39583 12.9844 5.39583H12.125V11.5281C12.125 11.899 12.125 12.2086 12.1046 12.4616C12.0832 12.7254 12.0371 12.9731 11.9189 13.2073C11.7377 13.5666 11.4484 13.8588 11.0927 14.0419C10.8608 14.1612 10.6156 14.2078 10.3545 14.2293C10.1041 14.25 9.79754 14.25 9.43031 14.25H6.56969C6.20246 14.25 5.89595 14.25 5.64554 14.2293C5.38437 14.2078 5.13917 14.1612 4.9073 14.0419C4.55156 13.8588 4.26233 13.5666 4.08107 13.2073C3.96292 12.9731 3.91678 12.7254 3.89545 12.4616C3.87499 12.2086 3.87499 11.899 3.875 11.5281L3.875 5.39583H3.01562C2.73085 5.39583 2.5 5.16265 2.5 4.875C2.5 4.58735 2.73085 4.35417 3.01562 4.35417H5.42188V3.83333ZM6.45312 4.35417H9.54688V3.83333C9.54688 3.25804 9.08517 2.79167 8.51562 2.79167H7.48438C6.91483 2.79167 6.45312 3.25804 6.45312 3.83333V4.35417ZM6.625 7.30556C6.90977 7.30556 7.14062 7.53874 7.14062 7.82639V11.9931C7.14062 12.2807 6.90977 12.5139 6.625 12.5139C6.34023 12.5139 6.10938 12.2807 6.10938 11.9931V7.82639C6.10938 7.53874 6.34023 7.30556 6.625 7.30556ZM9.89062 7.82639C9.89062 7.53874 9.65977 7.30556 9.375 7.30556C9.09023 7.30556 8.85938 7.53874 8.85938 7.82639V11.9931C8.85938 12.2807 9.09023 12.5139 9.375 12.5139C9.65977 12.5139 9.89062 12.2807 9.89062 11.9931V7.82639Z"
            fill="currentColor"
        />
    </s.Svg>
);