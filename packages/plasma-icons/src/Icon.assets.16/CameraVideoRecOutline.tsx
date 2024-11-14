import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CameraVideoRecOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
        <s.Path
            d="M6 9.39802C6.82843 9.39802 7.5 8.72645 7.5 7.89802C7.5 7.0696 6.82843 6.39802 6 6.39802C5.17157 6.39802 4.5 7.0696 4.5 7.89802C4.5 8.72645 5.17157 9.39802 6 9.39802Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.93103 3.71875C1.86455 3.71875 1 4.5833 1 5.64978V10.2877C1 11.3542 1.86455 12.2188 2.93103 12.2188H8.72414C9.79062 12.2188 10.6552 11.3542 10.6552 10.2877V5.64978C10.6552 4.5833 9.79062 3.71875 8.72414 3.71875H2.93103ZM8.72414 4.71875H2.93103C2.41684 4.71875 2 5.13559 2 5.64978V10.2877C2 10.8019 2.41684 11.2188 2.93103 11.2188H8.72414C9.23833 11.2188 9.65517 10.8019 9.65517 10.2877V5.64978C9.65517 5.13559 9.23833 4.71875 8.72414 4.71875Z"
            fill="currentColor"
        />
        <s.Path
            d="M13.8592 5.15438C14.2781 4.73058 15.0001 5.02716 15.0001 5.623V10.3816C15.0001 10.9896 14.2529 11.2803 13.842 10.8321L11.5788 8.36361C11.3386 8.10162 11.3462 7.69726 11.596 7.44445L13.8592 5.15438Z"
            fill="currentColor"
        />
    </s.Svg>
);