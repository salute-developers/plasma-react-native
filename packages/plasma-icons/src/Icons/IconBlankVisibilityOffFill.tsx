import React from 'react';

import { BlankVisibilityOffFill as Icon16 } from '../Icon.assets.16/BlankVisibilityOffFill';
import { BlankVisibilityOffFill as Icon24 } from '../Icon.assets.24/BlankVisibilityOffFill';
import { BlankVisibilityOffFill as Icon36 } from '../Icon.assets.36/BlankVisibilityOffFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankVisibilityOffFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
