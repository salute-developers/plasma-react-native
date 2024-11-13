import React from 'react';

import { RowHeightMaxOutline as Icon16 } from '../Icon.assets.16/RowHeightMaxOutline';
import { RowHeightMaxOutline as Icon24 } from '../Icon.assets.24/RowHeightMaxOutline';
import { RowHeightMaxOutline as Icon36 } from '../Icon.assets.36/RowHeightMaxOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRowHeightMaxOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
