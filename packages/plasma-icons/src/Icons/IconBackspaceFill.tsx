import React from 'react';

import { BackspaceFill as Icon16 } from '../Icon.assets.16/BackspaceFill';
import { BackspaceFill as Icon24 } from '../Icon.assets.24/BackspaceFill';
import { BackspaceFill as Icon36 } from '../Icon.assets.36/BackspaceFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBackspaceFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
