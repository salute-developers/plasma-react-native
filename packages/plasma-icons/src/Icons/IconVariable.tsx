import React from 'react';

import { Variable as Icon16 } from '../Icon.assets.16/Variable';
import { Variable as Icon24 } from '../Icon.assets.24/Variable';
import { Variable as Icon36 } from '../Icon.assets.36/Variable';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVariable: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
