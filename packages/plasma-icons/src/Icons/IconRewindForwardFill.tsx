import React from 'react';

import { RewindForwardFill as Icon16 } from '../Icon.assets.16/RewindForwardFill';
import { RewindForwardFill as Icon24 } from '../Icon.assets.24/RewindForwardFill';
import { RewindForwardFill as Icon36 } from '../Icon.assets.36/RewindForwardFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRewindForwardFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};