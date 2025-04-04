import React from 'react';

import { SberportalOutline as Icon16 } from '../Icon.assets.16/SberportalOutline';
import { SberportalOutline as Icon24 } from '../Icon.assets.24/SberportalOutline';
import { SberportalOutline as Icon36 } from '../Icon.assets.36/SberportalOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberportalOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
