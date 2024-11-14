import React from 'react';

import { GlassCareFill as Icon16 } from '../Icon.assets.16/GlassCareFill';
import { GlassCareFill as Icon24 } from '../Icon.assets.24/GlassCareFill';
import { GlassCareFill as Icon36 } from '../Icon.assets.36/GlassCareFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGlassCareFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};