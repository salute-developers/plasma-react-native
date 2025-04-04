import React from 'react';
import * as s from 'react-native-svg';

import { IconProps } from '../IconRoot';

export const StarFill: React.FC<IconProps> = (props) => (
    <s.Svg viewBox="0 0 36 36" width={36} height={36} fill="none" {...props}>
        <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5878 4.35914C17.1762 3.21362 18.8238 3.21362 19.4122 4.35914L23.2733 11.8756L31.6619 13.201C32.9404 13.403 33.4495 14.9597 32.5347 15.8697L26.5323 21.8406L27.8557 30.1762C28.0574 31.4466 26.7245 32.4087 25.5707 31.8255L18 27.9993L10.4293 31.8255C9.27547 32.4087 7.94258 31.4466 8.14427 30.1762L9.46765 21.8406L3.46529 15.8697C2.55053 14.9597 3.05964 13.403 4.33808 13.201L12.7267 11.8756L16.5878 4.35914Z"
            fill="currentColor"
        />
    </s.Svg>
);
