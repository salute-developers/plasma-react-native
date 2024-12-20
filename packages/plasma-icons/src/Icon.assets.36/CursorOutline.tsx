import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const CursorOutline: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1959 6.34662C8.86277 5.70218 7.38163 6.90159 7.73481 8.3396L13.4772 31.7204C13.8919 33.4089 16.2484 33.5249 16.827 31.8853L20.4727 21.5535L31.3368 20.1355C33.0608 19.9105 33.4373 17.5814 31.8719 16.8247L10.1959 6.34662ZM9.8038 8.37849L30.2473 18.2608L20.0616 19.5902C19.4077 19.6756 18.8572 20.1213 18.6378 20.7432L15.2197 30.4299L9.8038 8.37849Z"
            fill="currentColor"
        />
    </s.Svg>
);
