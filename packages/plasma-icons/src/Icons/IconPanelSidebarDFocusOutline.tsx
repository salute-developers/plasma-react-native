import React from 'react';

import { PanelSidebarDFocusOutline as Icon16 } from '../Icon.assets.16/PanelSidebarDFocusOutline';
import { PanelSidebarDFocusOutline as Icon24 } from '../Icon.assets.24/PanelSidebarDFocusOutline';
import { PanelSidebarDFocusOutline as Icon36 } from '../Icon.assets.36/PanelSidebarDFocusOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPanelSidebarDFocusOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
