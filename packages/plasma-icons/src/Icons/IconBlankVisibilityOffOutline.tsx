import React from 'react';

import { BlankVisibilityOffOutline as Icon16 } from '../Icon.assets.16/BlankVisibilityOffOutline';
import { BlankVisibilityOffOutline as Icon24 } from '../Icon.assets.24/BlankVisibilityOffOutline';
import { BlankVisibilityOffOutline as Icon36 } from '../Icon.assets.36/BlankVisibilityOffOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankVisibilityOffOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
