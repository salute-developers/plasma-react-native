import React from 'react';

import { PoopFill as Icon16 } from '../Icon.assets.16/PoopFill';
import { PoopFill as Icon24 } from '../Icon.assets.24/PoopFill';
import { PoopFill as Icon36 } from '../Icon.assets.36/PoopFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPoopFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
