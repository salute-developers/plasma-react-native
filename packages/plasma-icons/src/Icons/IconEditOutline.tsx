import React from 'react';

import { EditOutline as Icon16 } from '../Icon.assets.16/EditOutline';
import { EditOutline as Icon24 } from '../Icon.assets.24/EditOutline';
import { EditOutline as Icon36 } from '../Icon.assets.36/EditOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEditOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
