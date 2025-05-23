import React from 'react';

import { WrenchOutline as Icon16 } from '../Icon.assets.16/WrenchOutline';
import { WrenchOutline as Icon24 } from '../Icon.assets.24/WrenchOutline';
import { WrenchOutline as Icon36 } from '../Icon.assets.36/WrenchOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWrenchOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
