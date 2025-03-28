import React from 'react';

import { PlaneOutline as Icon16 } from '../Icon.assets.16/PlaneOutline';
import { PlaneOutline as Icon24 } from '../Icon.assets.24/PlaneOutline';
import { PlaneOutline as Icon36 } from '../Icon.assets.36/PlaneOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPlaneOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
