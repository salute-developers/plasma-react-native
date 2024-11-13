import React from 'react';

import { Whatsapp as Icon16 } from '../Icon.assets.16/Whatsapp';
import { Whatsapp as Icon24 } from '../Icon.assets.24/Whatsapp';
import { Whatsapp as Icon36 } from '../Icon.assets.36/Whatsapp';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWhatsapp: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
