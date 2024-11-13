import React from 'react';

import { ColumnCheckboxOutline as Icon16 } from '../Icon.assets.16/ColumnCheckboxOutline';
import { ColumnCheckboxOutline as Icon24 } from '../Icon.assets.24/ColumnCheckboxOutline';
import { ColumnCheckboxOutline as Icon36 } from '../Icon.assets.36/ColumnCheckboxOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconColumnCheckboxOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
