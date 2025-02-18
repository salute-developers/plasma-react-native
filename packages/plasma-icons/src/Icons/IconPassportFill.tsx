import React from 'react';

import { PassportFill as Icon16 } from '../Icon.assets.16/PassportFill';
import { PassportFill as Icon24 } from '../Icon.assets.24/PassportFill';
import { PassportFill as Icon36 } from '../Icon.assets.36/PassportFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPassportFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
