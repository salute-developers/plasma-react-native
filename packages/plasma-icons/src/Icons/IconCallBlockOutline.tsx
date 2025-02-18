import React from 'react';

import { CallBlockOutline as Icon16 } from '../Icon.assets.16/CallBlockOutline';
import { CallBlockOutline as Icon24 } from '../Icon.assets.24/CallBlockOutline';
import { CallBlockOutline as Icon36 } from '../Icon.assets.36/CallBlockOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCallBlockOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
