import React from 'react';

import { SwapHorizCircOutline as Icon16 } from '../Icon.assets.16/SwapHorizCircOutline';
import { SwapHorizCircOutline as Icon24 } from '../Icon.assets.24/SwapHorizCircOutline';
import { SwapHorizCircOutline as Icon36 } from '../Icon.assets.36/SwapHorizCircOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSwapHorizCircOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};