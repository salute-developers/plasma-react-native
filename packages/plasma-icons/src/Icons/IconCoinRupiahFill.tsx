import React from 'react';

import { CoinRupiahFill as Icon16 } from '../Icon.assets.16/CoinRupiahFill';
import { CoinRupiahFill as Icon24 } from '../Icon.assets.24/CoinRupiahFill';
import { CoinRupiahFill as Icon36 } from '../Icon.assets.36/CoinRupiahFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCoinRupiahFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
