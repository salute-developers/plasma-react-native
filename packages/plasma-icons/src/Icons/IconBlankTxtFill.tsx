import React from 'react';

import { BlankTxtFill as Icon16 } from '../Icon.assets.16/BlankTxtFill';
import { BlankTxtFill as Icon24 } from '../Icon.assets.24/BlankTxtFill';
import { BlankTxtFill as Icon36 } from '../Icon.assets.36/BlankTxtFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankTxtFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
