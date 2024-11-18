import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const Header1: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 19.0743V26H18.25V10H16V16.4457H10.7153V10H8.5V26H10.7153V19.0743H16ZM20.25 15.4088L23.3469 12.9342V23.8667H20.25V26H27.75V23.8667H25.5V10H23.3469L20.25 12.6252V15.4088Z"
            fill="currentColor"
        />
    </s.Svg>
);
