import React from 'react';

import { FileErrorOutline as Icon16 } from '../Icon.assets.16/FileErrorOutline';
import { FileErrorOutline as Icon24 } from '../Icon.assets.24/FileErrorOutline';
import { FileErrorOutline as Icon36 } from '../Icon.assets.36/FileErrorOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFileErrorOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
