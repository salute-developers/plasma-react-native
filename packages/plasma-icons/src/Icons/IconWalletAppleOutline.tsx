import React from 'react';

import { WalletAppleOutline as Icon16 } from '../Icon.assets.16/WalletAppleOutline';
import { WalletAppleOutline as Icon24 } from '../Icon.assets.24/WalletAppleOutline';
import { WalletAppleOutline as Icon36 } from '../Icon.assets.36/WalletAppleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWalletAppleOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
