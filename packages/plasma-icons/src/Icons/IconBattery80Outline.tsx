import React from 'react';

import { Battery80Outline as Icon16 } from '../Icon.assets.16/Battery80Outline';
import { Battery80Outline as Icon24 } from '../Icon.assets.24/Battery80Outline';
import { Battery80Outline as Icon36 } from '../Icon.assets.36/Battery80Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBattery80Outline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
