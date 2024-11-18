import React from 'react';

import { SberboomMiniErrorFill as Icon16 } from '../Icon.assets.16/SberboomMiniErrorFill';
import { SberboomMiniErrorFill as Icon24 } from '../Icon.assets.24/SberboomMiniErrorFill';
import { SberboomMiniErrorFill as Icon36 } from '../Icon.assets.36/SberboomMiniErrorFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboomMiniErrorFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
