export type MetaGrouped = Partial<Record<TokenType['type'], Array<TokenType>>>;

export interface ThemeRequest {
    name: string;
    version: string;
}

export interface ThemeSource {
    meta: ThemeMeta;
    variations: Record<Variation, any>;
}

// INFO: Типы частично скопированы из репозитория plasma/website/plasma-theme-builder

export interface Variations<
    T1 extends any = any,
    T2 extends any = any,
    T3 extends any = any,
    T4 extends any = any,
    T5 extends any = any,
    T6 extends any = any
> {
    color: T1;
    gradient: T2;
    shape: T4;
    shadow: T3;
    typography: T5;
    fontFamily: T6;
}

export type Variation = keyof Variations;

export interface ThemeMeta {
    name: string;
    version: string;
    tokens: Array<TokenType>;
}

export interface TokenType {
    type: Variation;
    name: string;
    tags: Array<string>;
    displayName: string;
    description?: string;
    enabled: boolean;
}
