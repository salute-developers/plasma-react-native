import React from 'react';

import { FilterOff as Icon16 } from '../Icon.assets.16/FilterOff';
import { FilterOff as Icon24 } from '../Icon.assets.24/FilterOff';
import { FilterOff as Icon36 } from '../Icon.assets.36/FilterOff';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFilterOff: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
