import React from 'react';

import { PoopOutline as Icon16 } from '../Icon.assets.16/PoopOutline';
import { PoopOutline as Icon24 } from '../Icon.assets.24/PoopOutline';
import { PoopOutline as Icon36 } from '../Icon.assets.36/PoopOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPoopOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
