import React from 'react';

import { PanelSidebarDFocusOutlineOff as Icon16 } from '../Icon.assets.16/PanelSidebarDFocusOutlineOff';
import { PanelSidebarDFocusOutlineOff as Icon24 } from '../Icon.assets.24/PanelSidebarDFocusOutlineOff';
import { PanelSidebarDFocusOutlineOff as Icon36 } from '../Icon.assets.36/PanelSidebarDFocusOutlineOff';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPanelSidebarDFocusOutlineOff: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
