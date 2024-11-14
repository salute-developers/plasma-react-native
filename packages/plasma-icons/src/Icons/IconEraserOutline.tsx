import React from 'react';

import { EraserOutline as Icon16 } from '../Icon.assets.16/EraserOutline';
import { EraserOutline as Icon24 } from '../Icon.assets.24/EraserOutline';
import { EraserOutline as Icon36 } from '../Icon.assets.36/EraserOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEraserOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};