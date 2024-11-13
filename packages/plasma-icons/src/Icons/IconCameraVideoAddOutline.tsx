import React from 'react';

import { CameraVideoAddOutline as Icon16 } from '../Icon.assets.16/CameraVideoAddOutline';
import { CameraVideoAddOutline as Icon24 } from '../Icon.assets.24/CameraVideoAddOutline';
import { CameraVideoAddOutline as Icon36 } from '../Icon.assets.36/CameraVideoAddOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCameraVideoAddOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
