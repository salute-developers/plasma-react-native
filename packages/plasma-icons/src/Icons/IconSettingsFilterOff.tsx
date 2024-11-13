import React from 'react';

import { SettingsFilterOff as Icon16 } from '../Icon.assets.16/SettingsFilterOff';
import { SettingsFilterOff as Icon24 } from '../Icon.assets.24/SettingsFilterOff';
import { SettingsFilterOff as Icon36 } from '../Icon.assets.36/SettingsFilterOff';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSettingsFilterOff: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
