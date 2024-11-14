import React from 'react';

import { WalletAppleFill as Icon16 } from '../Icon.assets.16/WalletAppleFill';
import { WalletAppleFill as Icon24 } from '../Icon.assets.24/WalletAppleFill';
import { WalletAppleFill as Icon36 } from '../Icon.assets.36/WalletAppleFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWalletAppleFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};