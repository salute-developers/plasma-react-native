import React from 'react';

import { RemoteControllerFill as Icon16 } from '../Icon.assets.16/RemoteControllerFill';
import { RemoteControllerFill as Icon24 } from '../Icon.assets.24/RemoteControllerFill';
import { RemoteControllerFill as Icon36 } from '../Icon.assets.36/RemoteControllerFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRemoteControllerFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
