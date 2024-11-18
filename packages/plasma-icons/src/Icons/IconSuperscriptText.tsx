import React from 'react';

import { SuperscriptText as Icon16 } from '../Icon.assets.16/SuperscriptText';
import { SuperscriptText as Icon24 } from '../Icon.assets.24/SuperscriptText';
import { SuperscriptText as Icon36 } from '../Icon.assets.36/SuperscriptText';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSuperscriptText: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
