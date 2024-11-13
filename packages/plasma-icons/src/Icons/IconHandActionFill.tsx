import React from 'react';

import { HandActionFill as Icon16 } from '../Icon.assets.16/HandActionFill';
import { HandActionFill as Icon24 } from '../Icon.assets.24/HandActionFill';
import { HandActionFill as Icon36 } from '../Icon.assets.36/HandActionFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHandActionFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
