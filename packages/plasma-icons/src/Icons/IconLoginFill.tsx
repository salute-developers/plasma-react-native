import React from 'react';

import { LoginFill as Icon16 } from '../Icon.assets.16/LoginFill';
import { LoginFill as Icon24 } from '../Icon.assets.24/LoginFill';
import { LoginFill as Icon36 } from '../Icon.assets.36/LoginFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLoginFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
