import React from 'react';

import { BlankCsvFill as Icon16 } from '../Icon.assets.16/BlankCsvFill';
import { BlankCsvFill as Icon24 } from '../Icon.assets.24/BlankCsvFill';
import { BlankCsvFill as Icon36 } from '../Icon.assets.36/BlankCsvFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankCsvFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
