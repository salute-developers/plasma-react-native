import React from 'react';

import { SberboomMiniErrorOutline as Icon16 } from '../Icon.assets.16/SberboomMiniErrorOutline';
import { SberboomMiniErrorOutline as Icon24 } from '../Icon.assets.24/SberboomMiniErrorOutline';
import { SberboomMiniErrorOutline as Icon36 } from '../Icon.assets.36/SberboomMiniErrorOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboomMiniErrorOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
