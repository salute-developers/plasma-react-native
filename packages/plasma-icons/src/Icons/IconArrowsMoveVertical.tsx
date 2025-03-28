import React from 'react';

import { ArrowsMoveVertical as Icon16 } from '../Icon.assets.16/ArrowsMoveVertical';
import { ArrowsMoveVertical as Icon24 } from '../Icon.assets.24/ArrowsMoveVertical';
import { ArrowsMoveVertical as Icon36 } from '../Icon.assets.36/ArrowsMoveVertical';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowsMoveVertical: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
