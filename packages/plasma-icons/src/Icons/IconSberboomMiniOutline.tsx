import React from 'react';

import { SberboomMiniOutline as Icon16 } from '../Icon.assets.16/SberboomMiniOutline';
import { SberboomMiniOutline as Icon24 } from '../Icon.assets.24/SberboomMiniOutline';
import { SberboomMiniOutline as Icon36 } from '../Icon.assets.36/SberboomMiniOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboomMiniOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
