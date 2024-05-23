import { ThemeMeta } from '../types';
export declare const readTheme: (themeName: string, themeVersion: string) => Promise<{
    meta: ThemeMeta;
    variations: Record<keyof import("../types").Variations<any, any, any, any, any, any>, any>;
}>;
