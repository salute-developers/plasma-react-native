import React from 'react';

import { CallOutline as Icon16 } from '../Icon.assets.16/CallOutline';
import { CallOutline as Icon24 } from '../Icon.assets.24/CallOutline';
import { CallOutline as Icon36 } from '../Icon.assets.36/CallOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
