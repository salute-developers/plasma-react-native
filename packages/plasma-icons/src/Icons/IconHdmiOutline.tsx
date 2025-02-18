import React from 'react';

import { HdmiOutline as Icon16 } from '../Icon.assets.16/HdmiOutline';
import { HdmiOutline as Icon24 } from '../Icon.assets.24/HdmiOutline';
import { HdmiOutline as Icon36 } from '../Icon.assets.36/HdmiOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHdmiOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
