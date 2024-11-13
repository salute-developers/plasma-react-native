import React from 'react';

import { MessageNewFill as Icon16 } from '../Icon.assets.16/MessageNewFill';
import { MessageNewFill as Icon24 } from '../Icon.assets.24/MessageNewFill';
import { MessageNewFill as Icon36 } from '../Icon.assets.36/MessageNewFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageNewFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
