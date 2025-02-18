import React from 'react';

import { ShieldDoneOutline as Icon16 } from '../Icon.assets.16/ShieldDoneOutline';
import { ShieldDoneOutline as Icon24 } from '../Icon.assets.24/ShieldDoneOutline';
import { ShieldDoneOutline as Icon36 } from '../Icon.assets.36/ShieldDoneOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShieldDoneOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
