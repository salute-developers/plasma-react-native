import React from 'react';

import { RotateCcw as Icon16 } from '../Icon.assets.16/RotateCcw';
import { RotateCcw as Icon24 } from '../Icon.assets.24/RotateCcw';
import { RotateCcw as Icon36 } from '../Icon.assets.36/RotateCcw';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRotateCcw: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};