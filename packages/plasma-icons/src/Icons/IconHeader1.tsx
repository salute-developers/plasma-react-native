import React from 'react';

import { Header1 as Icon16 } from '../Icon.assets.16/Header1';
import { Header1 as Icon24 } from '../Icon.assets.24/Header1';
import { Header1 as Icon36 } from '../Icon.assets.36/Header1';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHeader1: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
