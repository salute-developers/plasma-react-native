import React from 'react';

import { CoinRupiahFallingOutline as Icon16 } from '../Icon.assets.16/CoinRupiahFallingOutline';
import { CoinRupiahFallingOutline as Icon24 } from '../Icon.assets.24/CoinRupiahFallingOutline';
import { CoinRupiahFallingOutline as Icon36 } from '../Icon.assets.36/CoinRupiahFallingOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCoinRupiahFallingOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
