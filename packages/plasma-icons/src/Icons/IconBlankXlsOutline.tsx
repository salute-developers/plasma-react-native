import React from 'react';

import { BlankXlsOutline as Icon16 } from '../Icon.assets.16/BlankXlsOutline';
import { BlankXlsOutline as Icon24 } from '../Icon.assets.24/BlankXlsOutline';
import { BlankXlsOutline as Icon36 } from '../Icon.assets.36/BlankXlsOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankXlsOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
