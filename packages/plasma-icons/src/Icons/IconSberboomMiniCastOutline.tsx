import React from 'react';

import { SberboomMiniCastOutline as Icon16 } from '../Icon.assets.16/SberboomMiniCastOutline';
import { SberboomMiniCastOutline as Icon24 } from '../Icon.assets.24/SberboomMiniCastOutline';
import { SberboomMiniCastOutline as Icon36 } from '../Icon.assets.36/SberboomMiniCastOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboomMiniCastOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
