import React from 'react';

import { LightbulbOutline as Icon16 } from '../Icon.assets.16/LightbulbOutline';
import { LightbulbOutline as Icon24 } from '../Icon.assets.24/LightbulbOutline';
import { LightbulbOutline as Icon36 } from '../Icon.assets.36/LightbulbOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLightbulbOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
