import React from 'react';

import { TvDashFill as Icon16 } from '../Icon.assets.16/TvDashFill';
import { TvDashFill as Icon24 } from '../Icon.assets.24/TvDashFill';
import { TvDashFill as Icon36 } from '../Icon.assets.36/TvDashFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTvDashFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};