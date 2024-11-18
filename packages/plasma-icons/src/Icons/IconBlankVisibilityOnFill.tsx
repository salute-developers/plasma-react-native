import React from 'react';

import { BlankVisibilityOnFill as Icon16 } from '../Icon.assets.16/BlankVisibilityOnFill';
import { BlankVisibilityOnFill as Icon24 } from '../Icon.assets.24/BlankVisibilityOnFill';
import { BlankVisibilityOnFill as Icon36 } from '../Icon.assets.36/BlankVisibilityOnFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankVisibilityOnFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
