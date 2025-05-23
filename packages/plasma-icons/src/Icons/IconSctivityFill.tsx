import React from 'react';

import { SctivityFill as Icon16 } from '../Icon.assets.16/SctivityFill';
import { SctivityFill as Icon24 } from '../Icon.assets.24/SctivityFill';
import { SctivityFill as Icon36 } from '../Icon.assets.36/SctivityFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSctivityFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
