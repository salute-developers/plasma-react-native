import React from 'react';

import { WasherFill as Icon16 } from '../Icon.assets.16/WasherFill';
import { WasherFill as Icon24 } from '../Icon.assets.24/WasherFill';
import { WasherFill as Icon36 } from '../Icon.assets.36/WasherFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWasherFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
