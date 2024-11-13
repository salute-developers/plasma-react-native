import React from 'react';

import { LikeOutline as Icon16 } from '../Icon.assets.16/LikeOutline';
import { LikeOutline as Icon24 } from '../Icon.assets.24/LikeOutline';
import { LikeOutline as Icon36 } from '../Icon.assets.36/LikeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLikeOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};