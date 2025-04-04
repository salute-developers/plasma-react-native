import React from 'react';

import { TimerExpressSpeedFill as Icon16 } from '../Icon.assets.16/TimerExpressSpeedFill';
import { TimerExpressSpeedFill as Icon24 } from '../Icon.assets.24/TimerExpressSpeedFill';
import { TimerExpressSpeedFill as Icon36 } from '../Icon.assets.36/TimerExpressSpeedFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTimerExpressSpeedFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
