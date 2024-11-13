import React from 'react';

import { PanelSidebarLFocusFill as Icon16 } from '../Icon.assets.16/PanelSidebarLFocusFill';
import { PanelSidebarLFocusFill as Icon24 } from '../Icon.assets.24/PanelSidebarLFocusFill';
import { PanelSidebarLFocusFill as Icon36 } from '../Icon.assets.36/PanelSidebarLFocusFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPanelSidebarLFocusFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};