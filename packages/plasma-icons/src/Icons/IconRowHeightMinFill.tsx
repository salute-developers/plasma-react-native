import React from 'react';

import { RowHeightMinFill as Icon16 } from '../Icon.assets.16/RowHeightMinFill';
import { RowHeightMinFill as Icon24 } from '../Icon.assets.24/RowHeightMinFill';
import { RowHeightMinFill as Icon36 } from '../Icon.assets.36/RowHeightMinFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRowHeightMinFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
