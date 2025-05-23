import React from 'react';

import { DisclosureDownFill as Icon16 } from '../Icon.assets.16/DisclosureDownFill';
import { DisclosureDownFill as Icon24 } from '../Icon.assets.24/DisclosureDownFill';
import { DisclosureDownFill as Icon36 } from '../Icon.assets.36/DisclosureDownFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDisclosureDownFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
