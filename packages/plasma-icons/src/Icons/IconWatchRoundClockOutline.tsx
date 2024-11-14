import React from 'react';

import { WatchRoundClockOutline as Icon16 } from '../Icon.assets.16/WatchRoundClockOutline';
import { WatchRoundClockOutline as Icon24 } from '../Icon.assets.24/WatchRoundClockOutline';
import { WatchRoundClockOutline as Icon36 } from '../Icon.assets.36/WatchRoundClockOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWatchRoundClockOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};