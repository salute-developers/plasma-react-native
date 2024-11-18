import React from 'react';

import { EarDashOutline as Icon16 } from '../Icon.assets.16/EarDashOutline';
import { EarDashOutline as Icon24 } from '../Icon.assets.24/EarDashOutline';
import { EarDashOutline as Icon36 } from '../Icon.assets.36/EarDashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEarDashOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
