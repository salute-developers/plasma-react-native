import React from 'react';

import { HeartBoxFill as Icon16 } from '../Icon.assets.16/HeartBoxFill';
import { HeartBoxFill as Icon24 } from '../Icon.assets.24/HeartBoxFill';
import { HeartBoxFill as Icon36 } from '../Icon.assets.36/HeartBoxFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHeartBoxFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
