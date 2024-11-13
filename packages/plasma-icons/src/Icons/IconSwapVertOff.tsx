import React from 'react';

import { SwapVertOff as Icon16 } from '../Icon.assets.16/SwapVertOff';
import { SwapVertOff as Icon24 } from '../Icon.assets.24/SwapVertOff';
import { SwapVertOff as Icon36 } from '../Icon.assets.36/SwapVertOff';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSwapVertOff: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
