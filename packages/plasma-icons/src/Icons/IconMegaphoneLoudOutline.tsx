import React from 'react';

import { MegaphoneLoudOutline as Icon16 } from '../Icon.assets.16/MegaphoneLoudOutline';
import { MegaphoneLoudOutline as Icon24 } from '../Icon.assets.24/MegaphoneLoudOutline';
import { MegaphoneLoudOutline as Icon36 } from '../Icon.assets.36/MegaphoneLoudOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMegaphoneLoudOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
