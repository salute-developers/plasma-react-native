import React from 'react';

import { Button2x1RFill as Icon16 } from '../Icon.assets.16/Button2x1RFill';
import { Button2x1RFill as Icon24 } from '../Icon.assets.24/Button2x1RFill';
import { Button2x1RFill as Icon36 } from '../Icon.assets.36/Button2x1RFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconButton2x1RFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
