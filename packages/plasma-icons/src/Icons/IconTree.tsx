import React from 'react';

import { Tree as Icon16 } from '../Icon.assets.16/Tree';
import { Tree as Icon24 } from '../Icon.assets.24/Tree';
import { Tree as Icon36 } from '../Icon.assets.36/Tree';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTree: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
