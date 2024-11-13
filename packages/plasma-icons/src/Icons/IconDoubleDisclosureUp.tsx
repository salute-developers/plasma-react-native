import React from 'react';

import { DoubleDisclosureUp as Icon16 } from '../Icon.assets.16/DoubleDisclosureUp';
import { DoubleDisclosureUp as Icon24 } from '../Icon.assets.24/DoubleDisclosureUp';
import { DoubleDisclosureUp as Icon36 } from '../Icon.assets.36/DoubleDisclosureUp';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoubleDisclosureUp: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
