import React from 'react';

import { HandPointerFill as Icon16 } from '../Icon.assets.16/HandPointerFill';
import { HandPointerFill as Icon24 } from '../Icon.assets.24/HandPointerFill';
import { HandPointerFill as Icon36 } from '../Icon.assets.36/HandPointerFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHandPointerFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
