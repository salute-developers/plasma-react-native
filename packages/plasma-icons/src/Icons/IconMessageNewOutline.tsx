import React from 'react';

import { MessageNewOutline as Icon16 } from '../Icon.assets.16/MessageNewOutline';
import { MessageNewOutline as Icon24 } from '../Icon.assets.24/MessageNewOutline';
import { MessageNewOutline as Icon36 } from '../Icon.assets.36/MessageNewOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageNewOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
