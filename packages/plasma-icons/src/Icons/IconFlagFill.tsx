import React from 'react';

import { FlagFill as Icon16 } from '../Icon.assets.16/FlagFill';
import { FlagFill as Icon24 } from '../Icon.assets.24/FlagFill';
import { FlagFill as Icon36 } from '../Icon.assets.36/FlagFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFlagFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
