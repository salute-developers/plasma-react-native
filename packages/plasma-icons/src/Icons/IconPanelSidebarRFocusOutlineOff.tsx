import React from 'react';

import { PanelSidebarRFocusOutlineOff as Icon16 } from '../Icon.assets.16/PanelSidebarRFocusOutlineOff';
import { PanelSidebarRFocusOutlineOff as Icon24 } from '../Icon.assets.24/PanelSidebarRFocusOutlineOff';
import { PanelSidebarRFocusOutlineOff as Icon36 } from '../Icon.assets.36/PanelSidebarRFocusOutlineOff';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPanelSidebarRFocusOutlineOff: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
