import React from 'react';

import { Contrast2Outline as Icon16 } from '../Icon.assets.16/Contrast2Outline';
import { Contrast2Outline as Icon24 } from '../Icon.assets.24/Contrast2Outline';
import { Contrast2Outline as Icon36 } from '../Icon.assets.36/Contrast2Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconContrast2Outline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
