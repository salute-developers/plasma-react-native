import React from 'react';

import { RowHeightMaxFill as Icon16 } from '../Icon.assets.16/RowHeightMaxFill';
import { RowHeightMaxFill as Icon24 } from '../Icon.assets.24/RowHeightMaxFill';
import { RowHeightMaxFill as Icon36 } from '../Icon.assets.36/RowHeightMaxFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRowHeightMaxFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
