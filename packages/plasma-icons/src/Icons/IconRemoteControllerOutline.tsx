import React from 'react';

import { RemoteControllerOutline as Icon16 } from '../Icon.assets.16/RemoteControllerOutline';
import { RemoteControllerOutline as Icon24 } from '../Icon.assets.24/RemoteControllerOutline';
import { RemoteControllerOutline as Icon36 } from '../Icon.assets.36/RemoteControllerOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRemoteControllerOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
