import React from 'react';

import { HelpCircleOutline as Icon16 } from '../Icon.assets.16/HelpCircleOutline';
import { HelpCircleOutline as Icon24 } from '../Icon.assets.24/HelpCircleOutline';
import { HelpCircleOutline as Icon36 } from '../Icon.assets.36/HelpCircleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHelpCircleOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
