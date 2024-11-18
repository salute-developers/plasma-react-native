import React from 'react';

import { ColumnCheckboxFill as Icon16 } from '../Icon.assets.16/ColumnCheckboxFill';
import { ColumnCheckboxFill as Icon24 } from '../Icon.assets.24/ColumnCheckboxFill';
import { ColumnCheckboxFill as Icon36 } from '../Icon.assets.36/ColumnCheckboxFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconColumnCheckboxFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
