import { rectSkeletonComponent, lineSkeletonComponent, textSkeletonComponent } from '@salutejs/core-components';

import { getConfig } from './Skeleton.config';

export const RectSkeleton = rectSkeletonComponent();

export const LineSkeleton = lineSkeletonComponent(getConfig);

export const TextSkeleton = textSkeletonComponent(getConfig);
