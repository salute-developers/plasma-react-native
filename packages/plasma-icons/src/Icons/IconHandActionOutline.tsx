import React from 'react';

import { HandActionOutline as Icon16 } from '../Icon.assets.16/HandActionOutline';
import { HandActionOutline as Icon24 } from '../Icon.assets.24/HandActionOutline';
import { HandActionOutline as Icon36 } from '../Icon.assets.36/HandActionOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHandActionOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
