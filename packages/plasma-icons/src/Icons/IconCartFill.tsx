import React from 'react';

import { CartFill as Icon16 } from '../Icon.assets.16/CartFill';
import { CartFill as Icon24 } from '../Icon.assets.24/CartFill';
import { CartFill as Icon36 } from '../Icon.assets.36/CartFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCartFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
