import React from 'react';

import { CoinRubleFill as Icon16 } from '../Icon.assets.16/CoinRubleFill';
import { CoinRubleFill as Icon24 } from '../Icon.assets.24/CoinRubleFill';
import { CoinRubleFill as Icon36 } from '../Icon.assets.36/CoinRubleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCoinRubleFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};