import React from 'react';

import { LogoutFill as Icon16 } from '../Icon.assets.16/LogoutFill';
import { LogoutFill as Icon24 } from '../Icon.assets.24/LogoutFill';
import { LogoutFill as Icon36 } from '../Icon.assets.36/LogoutFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLogoutFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
