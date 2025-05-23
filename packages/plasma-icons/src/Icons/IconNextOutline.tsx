import React from 'react';

import { NextOutline as Icon16 } from '../Icon.assets.16/NextOutline';
import { NextOutline as Icon24 } from '../Icon.assets.24/NextOutline';
import { NextOutline as Icon36 } from '../Icon.assets.36/NextOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNextOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
