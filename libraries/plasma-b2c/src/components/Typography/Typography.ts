import { typographyComponent } from '@salutejs/core-components';

import { getConfigBodyL, getConfigBodyM, getConfigBodyS, getConfigBodyXS, getConfigBodyXXS } from './Body.config';
import { getConfigDisplayL, getConfigDisplayM, getConfigDisplayS } from './Display.config';
import { getConfigH1, getConfigH2, getConfigH3, getConfigH4, getConfigH5 } from './Heading.config';
import { getConfigTextL, getConfigTextM, getConfigTextS, getConfigTextXS } from './Text.config';

export const BodyL = typographyComponent(getConfigBodyL);
export const BodyM = typographyComponent(getConfigBodyM);
export const BodyS = typographyComponent(getConfigBodyS);
export const BodyXS = typographyComponent(getConfigBodyXS);
export const BodyXXS = typographyComponent(getConfigBodyXXS);

export const DisplayL = typographyComponent(getConfigDisplayL);
export const DisplayM = typographyComponent(getConfigDisplayM);
export const DisplayS = typographyComponent(getConfigDisplayS);

export const H1 = typographyComponent(getConfigH1);
export const H2 = typographyComponent(getConfigH2);
export const H3 = typographyComponent(getConfigH3);
export const H4 = typographyComponent(getConfigH4);
export const H5 = typographyComponent(getConfigH5);

export const TextL = typographyComponent(getConfigTextL);
export const TextM = typographyComponent(getConfigTextM);
export const TextS = typographyComponent(getConfigTextS);
export const TextXS = typographyComponent(getConfigTextXS);
