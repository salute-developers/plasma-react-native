import React from 'react';

import { AccessibilityCopy as Icon16 } from '../Icon.assets.16/AccessibilityCopy';
import { AccessibilityCopy as Icon24 } from '../Icon.assets.24/AccessibilityCopy';
import { AccessibilityCopy as Icon36 } from '../Icon.assets.36/AccessibilityCopy';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAccessibilityCopy: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
