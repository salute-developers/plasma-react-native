import { ReactElement } from 'react';

export type Color = {
    [k: string]: {
        [k: string]: string;
    };
};

export interface Gradient {
    [k: string]: {
        [k: string]: ReadonlyArray<
            | {
                  kind: 'linear';
                  locations: ReadonlyArray<number>;
                  colors: ReadonlyArray<string>;
                  angle: number;
              }
            | {
                  kind: 'radial';
                  locations: ReadonlyArray<number>;
                  colors: ReadonlyArray<string>;
                  centerX: number;
                  centerY: number;
                  radius: number;
              }
            | {
                  kind: 'color';
                  background: string;
              }
        >;
    };
}

export interface Shape {
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

type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

type FontStyle = 'italic' | 'normal';

export interface FontFamily {
    [k: string]: {
        name: string;
        fonts: ReadonlyArray<{
            fileName: string;
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
    fontFamily: FontFamily;
    typography: Typography;
}

export interface Theme<T extends Data = Data> {
    mode: 'light' | 'dark';
    screenSize: 'screenS' | 'screenM' | 'screenL';
    data: T;
}

export interface ThemeProviderProps {
    children: ReactElement;
    theme: Theme;
}
