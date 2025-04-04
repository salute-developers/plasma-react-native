import React from 'react';

import { SyncError as Icon16 } from '../Icon.assets.16/SyncError';
import { SyncError as Icon24 } from '../Icon.assets.24/SyncError';
import { SyncError as Icon36 } from '../Icon.assets.36/SyncError';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSyncError: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
