import React from 'react';

import { Linkedin as Icon16 } from '../Icon.assets.16/Linkedin';
import { Linkedin as Icon24 } from '../Icon.assets.24/Linkedin';
import { Linkedin as Icon36 } from '../Icon.assets.36/Linkedin';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLinkedin: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
