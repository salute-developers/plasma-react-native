import React from 'react';

import { HummerOutline as Icon16 } from '../Icon.assets.16/HummerOutline';
import { HummerOutline as Icon24 } from '../Icon.assets.24/HummerOutline';
import { HummerOutline as Icon36 } from '../Icon.assets.36/HummerOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHummerOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
