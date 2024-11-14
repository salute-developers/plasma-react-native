import React from 'react';

import { DoorRClosedOutline as Icon16 } from '../Icon.assets.16/DoorRClosedOutline';
import { DoorRClosedOutline as Icon24 } from '../Icon.assets.24/DoorRClosedOutline';
import { DoorRClosedOutline as Icon36 } from '../Icon.assets.36/DoorRClosedOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoorRClosedOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};