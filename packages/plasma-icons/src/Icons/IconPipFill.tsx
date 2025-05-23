import React from 'react';

import { PipFill as Icon16 } from '../Icon.assets.16/PipFill';
import { PipFill as Icon24 } from '../Icon.assets.24/PipFill';
import { PipFill as Icon36 } from '../Icon.assets.36/PipFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPipFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
