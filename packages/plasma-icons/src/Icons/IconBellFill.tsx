import React from 'react';

import { BellFill as Icon16 } from '../Icon.assets.16/BellFill';
import { BellFill as Icon24 } from '../Icon.assets.24/BellFill';
import { BellFill as Icon36 } from '../Icon.assets.36/BellFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBellFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
