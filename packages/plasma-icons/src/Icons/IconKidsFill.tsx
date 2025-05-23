import React from 'react';

import { KidsFill as Icon16 } from '../Icon.assets.16/KidsFill';
import { KidsFill as Icon24 } from '../Icon.assets.24/KidsFill';
import { KidsFill as Icon36 } from '../Icon.assets.36/KidsFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconKidsFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
