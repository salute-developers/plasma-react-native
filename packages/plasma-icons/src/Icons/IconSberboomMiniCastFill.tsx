import React from 'react';

import { SberboomMiniCastFill as Icon16 } from '../Icon.assets.16/SberboomMiniCastFill';
import { SberboomMiniCastFill as Icon24 } from '../Icon.assets.24/SberboomMiniCastFill';
import { SberboomMiniCastFill as Icon36 } from '../Icon.assets.36/SberboomMiniCastFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboomMiniCastFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
