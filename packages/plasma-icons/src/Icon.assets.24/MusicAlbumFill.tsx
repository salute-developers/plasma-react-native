import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const MusicAlbumFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.747 5.48C13.3469 5.37279 12.9357 5.61023 12.8285 6.01033C12.7213 6.41043 12.9587 6.82168 13.3588 6.92889C14.249 7.16741 15.0607 7.63604 15.7123 8.28769C16.364 8.93934 16.8326 9.75104 17.0711 10.6412C17.1783 11.0413 17.5896 11.2787 17.9897 11.1715C18.3898 11.0643 18.6272 10.6531 18.52 10.253C18.2133 9.10847 17.6108 8.06486 16.773 7.22703C15.9351 6.3892 14.8915 5.78667 13.747 5.48ZM6.01033 12.8285C6.41043 12.7213 6.82168 12.9587 6.92889 13.3588C7.16741 14.249 7.63604 15.0607 8.28769 15.7123C8.93934 16.364 9.75103 16.8326 10.6412 17.0711C11.0413 17.1783 11.2787 17.5896 11.1715 17.9897C11.0643 18.3898 10.6531 18.6272 10.253 18.52C9.10847 18.2133 8.06486 17.6108 7.22703 16.773C6.3892 15.9351 5.78667 14.8915 5.48 13.747C5.37279 13.3469 5.61023 12.9357 6.01033 12.8285ZM12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12C9.25 13.5188 10.4812 14.75 12 14.75Z"
            fill="currentColor"
        />
    </s.Svg>
);