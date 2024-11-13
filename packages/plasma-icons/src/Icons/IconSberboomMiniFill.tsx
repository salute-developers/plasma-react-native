import React from 'react';

import { SberboomMiniFill as Icon16 } from '../Icon.assets.16/SberboomMiniFill';
import { SberboomMiniFill as Icon24 } from '../Icon.assets.24/SberboomMiniFill';
import { SberboomMiniFill as Icon36 } from '../Icon.assets.36/SberboomMiniFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboomMiniFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
