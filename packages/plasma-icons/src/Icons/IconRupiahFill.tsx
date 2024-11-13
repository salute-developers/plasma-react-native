import React from 'react';

import { RupiahFill as Icon16 } from '../Icon.assets.16/RupiahFill';
import { RupiahFill as Icon24 } from '../Icon.assets.24/RupiahFill';
import { RupiahFill as Icon36 } from '../Icon.assets.36/RupiahFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRupiahFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
