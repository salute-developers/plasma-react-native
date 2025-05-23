import React from 'react';

import { RewindBackwardFill as Icon16 } from '../Icon.assets.16/RewindBackwardFill';
import { RewindBackwardFill as Icon24 } from '../Icon.assets.24/RewindBackwardFill';
import { RewindBackwardFill as Icon36 } from '../Icon.assets.36/RewindBackwardFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRewindBackwardFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
