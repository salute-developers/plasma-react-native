import React from 'react';

import { RewindBackward30 as Icon16 } from '../Icon.assets.16/RewindBackward30';
import { RewindBackward30 as Icon24 } from '../Icon.assets.24/RewindBackward30';
import { RewindBackward30 as Icon36 } from '../Icon.assets.36/RewindBackward30';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRewindBackward30: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};