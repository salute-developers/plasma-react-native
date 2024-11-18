import React from 'react';

import { StarHalfFill as Icon16 } from '../Icon.assets.16/StarHalfFill';
import { StarHalfFill as Icon24 } from '../Icon.assets.24/StarHalfFill';
import { StarHalfFill as Icon36 } from '../Icon.assets.36/StarHalfFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStarHalfFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
