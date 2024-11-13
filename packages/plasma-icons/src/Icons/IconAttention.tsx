import React from 'react';

import { Attention as Icon16 } from '../Icon.assets.16/Attention';
import { Attention as Icon24 } from '../Icon.assets.24/Attention';
import { Attention as Icon36 } from '../Icon.assets.36/Attention';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAttention: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
