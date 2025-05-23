import React from 'react';

import { BankCardStackOutline as Icon16 } from '../Icon.assets.16/BankCardStackOutline';
import { BankCardStackOutline as Icon24 } from '../Icon.assets.24/BankCardStackOutline';
import { BankCardStackOutline as Icon36 } from '../Icon.assets.36/BankCardStackOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBankCardStackOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
