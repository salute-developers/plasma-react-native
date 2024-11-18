import React from 'react';

import { RupiahOutline as Icon16 } from '../Icon.assets.16/RupiahOutline';
import { RupiahOutline as Icon24 } from '../Icon.assets.24/RupiahOutline';
import { RupiahOutline as Icon36 } from '../Icon.assets.36/RupiahOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRupiahOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
