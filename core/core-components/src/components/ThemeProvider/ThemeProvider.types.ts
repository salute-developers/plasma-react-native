import { ReactElement } from 'react';

export interface Color {
    [k: string]: {
        [k: string]: string;
    };
}

export interface LinearGradientType {
    kind: 'linear';
    locations: ReadonlyArray<number>;
    colors: ReadonlyArray<string>;
    angle: number;
}

export interface RadialGradientType {
    kind: 'radial';
    locations: ReadonlyArray<number>;
    colors: ReadonlyArray<string>;
    centerX: number;
    centerY: number;
    radius: number;
}

export interface BackgroundGradientType {
    kind: 'color';
    background: string;
}

export interface Gradient {
    [k: string]: {
        [k: string]: ReadonlyArray<LinearGradientType | RadialGradientType | BackgroundGradientType>;
    };
}

export interface Shape {
    [k: string]: {
        [k: string]: number;
    };
}

export interface Spacing {
    [k: string]: {
        [k: string]: number;
    };
}

export interface Shadow {
    [k: string]: {
        [k: string]: {
            elevation: number;
            color: string;
            offsetHeight: number;
            offsetWidth: number;
            opacity: number;
            radius: number;
        };
    };
}

export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export type FontStyle = 'italic' | 'normal';

export interface FontFamily {
    [k: string]: {
        name: string;
        fonts: ReadonlyArray<{
            fontName: string;
            link: string;
            fontWeight: FontWeight;
            fontStyle: FontStyle;
        }>;
    };
}

export interface Typography {
    [k: string]: {
        [k: string]: {
            fontFamilyRef: string;
            fontSize: number;
            fontWeight: FontWeight;
            fontStyle: FontStyle;
            lineHeight: number;
            letterSpacing: number;
        };
    };
}

export interface Data {
    color: Color;
    gradient: Gradient;
    shadow: Shadow;
    shape: Shape;
    spacing: Spacing;
    fontFamily: FontFamily;
    typography: Typography;
}

export interface Theme<T extends Data = Data> {
    /*
     * Режим темы
     */
    mode: 'light' | 'dark';
    /*
     * Размер экрана, на котором
     */
    screenSize: 'screenS' | 'screenM' | 'screenL';
    /*
     * Объект с токенами темы
     */
    data: T;
}

export interface ThemeProviderProps {
    children: ReactElement;
    theme: Theme;
}
