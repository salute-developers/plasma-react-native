import React from 'react';

import { BlankTxtOutline as Icon16 } from '../Icon.assets.16/BlankTxtOutline';
import { BlankTxtOutline as Icon24 } from '../Icon.assets.24/BlankTxtOutline';
import { BlankTxtOutline as Icon36 } from '../Icon.assets.36/BlankTxtOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankTxtOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
