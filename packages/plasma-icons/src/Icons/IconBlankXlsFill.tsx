import React from 'react';

import { BlankXlsFill as Icon16 } from '../Icon.assets.16/BlankXlsFill';
import { BlankXlsFill as Icon24 } from '../Icon.assets.24/BlankXlsFill';
import { BlankXlsFill as Icon36 } from '../Icon.assets.36/BlankXlsFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankXlsFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
