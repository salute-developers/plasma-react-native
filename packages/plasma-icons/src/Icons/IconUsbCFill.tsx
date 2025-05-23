import React from 'react';

import { UsbCFill as Icon16 } from '../Icon.assets.16/UsbCFill';
import { UsbCFill as Icon24 } from '../Icon.assets.24/UsbCFill';
import { UsbCFill as Icon36 } from '../Icon.assets.36/UsbCFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconUsbCFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
