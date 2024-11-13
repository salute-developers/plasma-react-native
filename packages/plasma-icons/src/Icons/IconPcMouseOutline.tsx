import React from 'react';

import { PcMouseOutline as Icon16 } from '../Icon.assets.16/PcMouseOutline';
import { PcMouseOutline as Icon24 } from '../Icon.assets.24/PcMouseOutline';
import { PcMouseOutline as Icon36 } from '../Icon.assets.36/PcMouseOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPcMouseOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
