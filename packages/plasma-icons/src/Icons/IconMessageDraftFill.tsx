import React from 'react';

import { MessageDraftFill as Icon16 } from '../Icon.assets.16/MessageDraftFill';
import { MessageDraftFill as Icon24 } from '../Icon.assets.24/MessageDraftFill';
import { MessageDraftFill as Icon36 } from '../Icon.assets.36/MessageDraftFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMessageDraftFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
