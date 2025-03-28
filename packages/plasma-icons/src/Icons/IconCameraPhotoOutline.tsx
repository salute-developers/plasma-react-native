import React from 'react';

import { CameraPhotoOutline as Icon16 } from '../Icon.assets.16/CameraPhotoOutline';
import { CameraPhotoOutline as Icon24 } from '../Icon.assets.24/CameraPhotoOutline';
import { CameraPhotoOutline as Icon36 } from '../Icon.assets.36/CameraPhotoOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCameraPhotoOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
