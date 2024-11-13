import React from 'react';

import { HandFill as Icon16 } from '../Icon.assets.16/HandFill';
import { HandFill as Icon24 } from '../Icon.assets.24/HandFill';
import { HandFill as Icon36 } from '../Icon.assets.36/HandFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHandFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
