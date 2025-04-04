import React from 'react';

import { BatteryHoriz20Outline as Icon16 } from '../Icon.assets.16/BatteryHoriz20Outline';
import { BatteryHoriz20Outline as Icon24 } from '../Icon.assets.24/BatteryHoriz20Outline';
import { BatteryHoriz20Outline as Icon36 } from '../Icon.assets.36/BatteryHoriz20Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBatteryHoriz20Outline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
