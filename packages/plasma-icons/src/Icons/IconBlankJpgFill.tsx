import React from 'react';

import { BlankJpgFill as Icon16 } from '../Icon.assets.16/BlankJpgFill';
import { BlankJpgFill as Icon24 } from '../Icon.assets.24/BlankJpgFill';
import { BlankJpgFill as Icon36 } from '../Icon.assets.36/BlankJpgFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBlankJpgFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
