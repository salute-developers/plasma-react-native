import React from 'react';

import { UploadFill as Icon16 } from '../Icon.assets.16/UploadFill';
import { UploadFill as Icon24 } from '../Icon.assets.24/UploadFill';
import { UploadFill as Icon36 } from '../Icon.assets.36/UploadFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconUploadFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
