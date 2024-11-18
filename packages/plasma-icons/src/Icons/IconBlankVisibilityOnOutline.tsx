import React from 'react';

import { BlankVisibilityOnOutline as Icon16 } from '../Icon.assets.16/BlankVisibilityOnOutline';
import { BlankVisibilityOnOutline as Icon24 } from '../Icon.assets.24/BlankVisibilityOnOutline';
import { BlankVisibilityOnOutline as Icon36 } from '../Icon.assets.36/BlankVisibilityOnOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankVisibilityOnOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
