import React from 'react';

import { SberboomError as Icon16 } from '../Icon.assets.16/SberboomError';
import { SberboomError as Icon24 } from '../Icon.assets.24/SberboomError';
import { SberboomError as Icon36 } from '../Icon.assets.36/SberboomError';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberboomError: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
