import React from 'react';

import { BlankDocFill as Icon16 } from '../Icon.assets.16/BlankDocFill';
import { BlankDocFill as Icon24 } from '../Icon.assets.24/BlankDocFill';
import { BlankDocFill as Icon36 } from '../Icon.assets.36/BlankDocFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankDocFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
