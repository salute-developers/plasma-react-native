import React from 'react';

import { ScribbleDiagonal as Icon16 } from '../Icon.assets.16/ScribbleDiagonal';
import { ScribbleDiagonal as Icon24 } from '../Icon.assets.24/ScribbleDiagonal';
import { ScribbleDiagonal as Icon36 } from '../Icon.assets.36/ScribbleDiagonal';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconScribbleDiagonal: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
