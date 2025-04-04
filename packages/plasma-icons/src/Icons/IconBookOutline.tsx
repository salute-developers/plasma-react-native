import React from 'react';

import { BookOutline as Icon16 } from '../Icon.assets.16/BookOutline';
import { BookOutline as Icon24 } from '../Icon.assets.24/BookOutline';
import { BookOutline as Icon36 } from '../Icon.assets.36/BookOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBookOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
