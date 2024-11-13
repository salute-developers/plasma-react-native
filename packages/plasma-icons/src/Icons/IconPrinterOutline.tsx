import React from 'react';

import { PrinterOutline as Icon16 } from '../Icon.assets.16/PrinterOutline';
import { PrinterOutline as Icon24 } from '../Icon.assets.24/PrinterOutline';
import { PrinterOutline as Icon36 } from '../Icon.assets.36/PrinterOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPrinterOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
