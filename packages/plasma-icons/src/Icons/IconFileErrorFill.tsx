import React from 'react';

import { FileErrorFill as Icon16 } from '../Icon.assets.16/FileErrorFill';
import { FileErrorFill as Icon24 } from '../Icon.assets.24/FileErrorFill';
import { FileErrorFill as Icon36 } from '../Icon.assets.36/FileErrorFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFileErrorFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
