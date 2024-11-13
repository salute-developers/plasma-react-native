import React from 'react';

import { RowHeightOutline as Icon16 } from '../Icon.assets.16/RowHeightOutline';
import { RowHeightOutline as Icon24 } from '../Icon.assets.24/RowHeightOutline';
import { RowHeightOutline as Icon36 } from '../Icon.assets.36/RowHeightOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRowHeightOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
