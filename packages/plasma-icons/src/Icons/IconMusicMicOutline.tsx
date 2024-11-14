import React from 'react';

import { MusicMicOutline as Icon16 } from '../Icon.assets.16/MusicMicOutline';
import { MusicMicOutline as Icon24 } from '../Icon.assets.24/MusicMicOutline';
import { MusicMicOutline as Icon36 } from '../Icon.assets.36/MusicMicOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMusicMicOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};