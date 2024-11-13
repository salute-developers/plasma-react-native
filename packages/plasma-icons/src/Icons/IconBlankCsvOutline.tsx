import React from 'react';

import { BlankCsvOutline as Icon16 } from '../Icon.assets.16/BlankCsvOutline';
import { BlankCsvOutline as Icon24 } from '../Icon.assets.24/BlankCsvOutline';
import { BlankCsvOutline as Icon36 } from '../Icon.assets.36/BlankCsvOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankCsvOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
