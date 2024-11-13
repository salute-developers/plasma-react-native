import React from 'react';

import { RowHeightMinOutline as Icon16 } from '../Icon.assets.16/RowHeightMinOutline';
import { RowHeightMinOutline as Icon24 } from '../Icon.assets.24/RowHeightMinOutline';
import { RowHeightMinOutline as Icon36 } from '../Icon.assets.36/RowHeightMinOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRowHeightMinOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
