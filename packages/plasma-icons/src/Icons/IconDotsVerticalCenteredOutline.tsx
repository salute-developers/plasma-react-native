import React from 'react';

import { DotsVerticalCenteredOutline as Icon16 } from '../Icon.assets.16/DotsVerticalCenteredOutline';
import { DotsVerticalCenteredOutline as Icon24 } from '../Icon.assets.24/DotsVerticalCenteredOutline';
import { DotsVerticalCenteredOutline as Icon36 } from '../Icon.assets.36/DotsVerticalCenteredOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDotsVerticalCenteredOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
