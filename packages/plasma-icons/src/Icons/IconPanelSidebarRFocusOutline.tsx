import React from 'react';

import { PanelSidebarRFocusOutline as Icon16 } from '../Icon.assets.16/PanelSidebarRFocusOutline';
import { PanelSidebarRFocusOutline as Icon24 } from '../Icon.assets.24/PanelSidebarRFocusOutline';
import { PanelSidebarRFocusOutline as Icon36 } from '../Icon.assets.36/PanelSidebarRFocusOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPanelSidebarRFocusOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
