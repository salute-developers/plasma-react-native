import React from 'react';

import { HourglassFill as Icon16 } from '../Icon.assets.16/HourglassFill';
import { HourglassFill as Icon24 } from '../Icon.assets.24/HourglassFill';
import { HourglassFill as Icon36 } from '../Icon.assets.36/HourglassFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHourglassFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
