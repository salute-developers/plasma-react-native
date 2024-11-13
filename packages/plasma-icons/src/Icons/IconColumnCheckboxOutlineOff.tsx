import React from 'react';

import { ColumnCheckboxOutlineOff as Icon16 } from '../Icon.assets.16/ColumnCheckboxOutlineOff';
import { ColumnCheckboxOutlineOff as Icon24 } from '../Icon.assets.24/ColumnCheckboxOutlineOff';
import { ColumnCheckboxOutlineOff as Icon36 } from '../Icon.assets.36/ColumnCheckboxOutlineOff';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconColumnCheckboxOutlineOff: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
