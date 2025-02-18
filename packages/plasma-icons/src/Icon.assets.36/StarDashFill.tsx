import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const StarDashFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.4122 4.35914C18.8238 3.21362 17.1762 3.21362 16.5878 4.35914L12.7267 11.8756L4.33808 13.201C3.05964 13.403 2.55053 14.9597 3.46529 15.8697L9.46765 21.8406L8.4311 28.3695L24.6996 12.101L23.2733 11.8756L19.4122 4.35914ZM27.1422 12.4869L8.36694 31.2621C8.77872 31.9046 9.64533 32.2217 10.4293 31.8255L18 27.9993L25.5707 31.8255C26.7245 32.4087 28.0574 31.4466 27.8557 30.1762L26.5323 21.8406L32.5347 15.8697C33.4495 14.9597 32.9404 13.403 31.6619 13.201L27.1422 12.4869Z"
            fill="currentColor"
        />
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.163 4.29289C31.5535 4.68342 31.5535 5.31658 31.163 5.70711L5.70711 31.163C5.31658 31.5535 4.68342 31.5535 4.29289 31.163C3.90237 30.7724 3.90237 30.1393 4.29289 29.7487L29.7487 4.29289C30.1393 3.90237 30.7724 3.90237 31.163 4.29289Z"
            fill="currentColor"
        />
    </s.Svg>
);
