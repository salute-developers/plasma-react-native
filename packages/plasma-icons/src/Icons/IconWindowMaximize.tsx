import React from 'react';

import { WindowMaximize as Icon16 } from '../Icon.assets.16/WindowMaximize';
import { WindowMaximize as Icon24 } from '../Icon.assets.24/WindowMaximize';
import { WindowMaximize as Icon36 } from '../Icon.assets.36/WindowMaximize';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWindowMaximize: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
