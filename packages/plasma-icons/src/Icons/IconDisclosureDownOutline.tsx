import React from 'react';

import { DisclosureDownOutline as Icon16 } from '../Icon.assets.16/DisclosureDownOutline';
import { DisclosureDownOutline as Icon24 } from '../Icon.assets.24/DisclosureDownOutline';
import { DisclosureDownOutline as Icon36 } from '../Icon.assets.36/DisclosureDownOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDisclosureDownOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};