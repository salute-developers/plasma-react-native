import React from 'react';

import { GyroOutline as Icon16 } from '../Icon.assets.16/GyroOutline';
import { GyroOutline as Icon24 } from '../Icon.assets.24/GyroOutline';
import { GyroOutline as Icon36 } from '../Icon.assets.36/GyroOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGyroOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};