import React from 'react';

import { Hierarchy as Icon16 } from '../Icon.assets.16/Hierarchy';
import { Hierarchy as Icon24 } from '../Icon.assets.24/Hierarchy';
import { Hierarchy as Icon36 } from '../Icon.assets.36/Hierarchy';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHierarchy: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
