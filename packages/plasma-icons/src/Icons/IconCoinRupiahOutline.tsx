import React from 'react';

import { CoinRupiahOutline as Icon16 } from '../Icon.assets.16/CoinRupiahOutline';
import { CoinRupiahOutline as Icon24 } from '../Icon.assets.24/CoinRupiahOutline';
import { CoinRupiahOutline as Icon36 } from '../Icon.assets.36/CoinRupiahOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCoinRupiahOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
