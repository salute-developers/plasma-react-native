## ThemeProvider

Компонент-обёртка, предназначен для подключения тем и предоставляет не типизированный хук `useTheme`, который используется для получения значений токенов темы из контекста.

### Свойства и типы

Компонент `ThemeProvider` имеет свойства 'children' и 'theme' со следующей типизацией:

```ts
interface ThemeProviderProps {
    children: ReactElement;
    theme: Theme;
}

interface Theme<T extends Data = Data> {
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

interface Data {
    color: Color;
    gradient: Gradient;
    shadow: Shadow;
    shape: Shape;
    spacing: Spacing;
    fontFamily: FontFamily;
    typography: Typography;
}
```

#### Color

Токены цвета.

```ts
type Color = {
    [k: string]: {
        [k: string]: string;
    };
};
```

#### Gradient

Токены градиентов.

```ts
interface LinearGradientType {
    kind: 'linear';
    locations: ReadonlyArray<number>;
    colors: ReadonlyArray<string>;
    angle: number;
}

interface RadialGradientType {
    kind: 'radial';
    locations: ReadonlyArray<number>;
    colors: ReadonlyArray<string>;
    centerX: number;
    centerY: number;
    radius: number;
}

interface BackgroundGradientType {
    kind: 'color';
    background: string;
}

interface Gradient {
    [k: string]: {
        [k: string]: ReadonlyArray<LinearGradientType | RadialGradientType | BackgroundGradientType>;
    };
}
```

#### Shape

Токены скруглений.

```ts
interface Shape {
    [k: string]: {
        [k: string]: number;
    };
}
```

#### Spacing

Токены отступов.

```ts
interface Spacing {
    [k: string]: {
        [k: string]: number;
    };
}
```

#### Shadow

Токены теней.

```ts
interface Shadow {
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
```

#### FontFamily

Токены семейства шрифтов.

```ts
type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

type FontStyle = 'italic' | 'normal';

interface FontFamily {
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
```

#### FontFamily

Токены типографики.

```ts
interface Typography {
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
```

### Подключение

Для подключение необходимо импортировать объекты тем из соответствующих библиотек.

```ts
import { useState } from 'react';
import { View } from 'react-native';
import { ThemeProvider, Switch } from '@salutejs/plasma-star-ds-tv';
import { stylesSalute } from '@salutejs/plasma-themes-native';

const data = stylesSalute;

type ThemeMode = 'light' | 'dark';

const App = () => {
    const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

    const onThemeModeToggle = (value: boolean) => {
        const themeMode = value ? 'dark' : 'light';

        setThemeMode(themeMode);
    };

    return (
        <ThemeProvider
            theme={{
                mode: themeMode,
                screenSize: 'screenM',
                data,
            }}
        >
            <View
                style={{
                    backgroundColor: data.color[themeMode].backgroundPrimary,
                    height: '100%',
                }}
            >
                <Switch
                    label="Переключить тему"
                    checked={themeMode === 'dark' ? true : false}
                    onValueChange={onThemeModeToggle}
                />
            </View>
        </ThemeProvider>
    );
};

export default App;
```

#### Получение значений токенов

Для получения значений токенов, необходимо импортировать объект темы.

```ts
import { stylesSalute } from '@salutejs/plasma-themes-native';

const { color, gradient, shape, spacing, shadow, fontFamily, typography } = stylesSalute;

const backgroundPrimaryToken = color.dark.backgroundPrimary;
const backgroundModalSheetToken = gradient.dark.backgroundModalSheet;
const hardMToken = shadow.down.hardM;
const roundSToken = shape.round.s;
const spacingX10Token = spacing.size.x10;
const fontFamilyToken = fontFamily.display;
const screenMBodyMBoldToken = typography.screenM.bodyMBold;
```
