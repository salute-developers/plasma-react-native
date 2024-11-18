import React from 'react';

import { Header2 as Icon16 } from '../Icon.assets.16/Header2';
import { Header2 as Icon24 } from '../Icon.assets.24/Header2';
import { Header2 as Icon36 } from '../Icon.assets.36/Header2';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHeader2: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
