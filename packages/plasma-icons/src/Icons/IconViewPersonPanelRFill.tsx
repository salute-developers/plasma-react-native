import React from 'react';

import { ViewPersonPanelRFill as Icon16 } from '../Icon.assets.16/ViewPersonPanelRFill';
import { ViewPersonPanelRFill as Icon24 } from '../Icon.assets.24/ViewPersonPanelRFill';
import { ViewPersonPanelRFill as Icon36 } from '../Icon.assets.36/ViewPersonPanelRFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconViewPersonPanelRFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};