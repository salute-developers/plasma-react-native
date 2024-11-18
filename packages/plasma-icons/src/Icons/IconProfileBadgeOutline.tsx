import React from 'react';

import { ProfileBadgeOutline as Icon16 } from '../Icon.assets.16/ProfileBadgeOutline';
import { ProfileBadgeOutline as Icon24 } from '../Icon.assets.24/ProfileBadgeOutline';
import { ProfileBadgeOutline as Icon36 } from '../Icon.assets.36/ProfileBadgeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconProfileBadgeOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
