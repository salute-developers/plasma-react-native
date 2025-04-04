import React from 'react';

import { SmileFill as Icon16 } from '../Icon.assets.16/SmileFill';
import { SmileFill as Icon24 } from '../Icon.assets.24/SmileFill';
import { SmileFill as Icon36 } from '../Icon.assets.36/SmileFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSmileFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
