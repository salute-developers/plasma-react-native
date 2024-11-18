import React from 'react';

import { WindowMinimize as Icon16 } from '../Icon.assets.16/WindowMinimize';
import { WindowMinimize as Icon24 } from '../Icon.assets.24/WindowMinimize';
import { WindowMinimize as Icon36 } from '../Icon.assets.36/WindowMinimize';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWindowMinimize: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
