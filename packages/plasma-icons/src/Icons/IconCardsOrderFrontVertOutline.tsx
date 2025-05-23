import React from 'react';

import { CardsOrderFrontVertOutline as Icon16 } from '../Icon.assets.16/CardsOrderFrontVertOutline';
import { CardsOrderFrontVertOutline as Icon24 } from '../Icon.assets.24/CardsOrderFrontVertOutline';
import { CardsOrderFrontVertOutline as Icon36 } from '../Icon.assets.36/CardsOrderFrontVertOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCardsOrderFrontVertOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
