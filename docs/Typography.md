## Typography

Компоненты типографики, имеющие семантические значения, а так же стилизацию в зависимости от подключаемой темы.

### Подключение

При подключении шрифта важно, чтобы имена семейств шрифта (font-family) совпадали с зарегистрированными в системе названиями.

Например, по умолчанию в SberOS подключен весь набор семейства шрифтов `SB Sans Text`, поэтому при использовании данных компонент в сервисе, который будет запускаться под этой системой, шрифты будут корректно отображаться.

#### Пример подключения через expo-font

```ts
import { useFonts } from 'expo-font';

const Storybook = () => {
    const [fontsLoaded] = useFonts({
        'SB Sans Display Bold': require('assets/fonts/SBSansDisplay-Bold.otf'),
        'SB Sans Display Medium': require('assets/fonts/SBSansDisplay-Medium.otf'),
        'SB Sans Display': require('assets/fonts/SBSansDisplay-Regular.otf'),
        'SB Sans Display Semibold': require('assets/fonts/SBSansDisplay-Semibold.otf'),
        'SB Sans Display Thin': require('assets/fonts/SBSansDisplay-Thin.otf'),
        'SB Sans Display Light': require('assets/fonts/SBSansDisplay-Light.otf'),
        'SB Sans Text Bold': require('assets/fonts/SBSansText-Bold.otf'),
        'SB Sans Text Bold Italic': require('assets/fonts/SBSansText-BoldItalic.otf'),
        'SB Sans Text Italic': require('assets/fonts/SBSansText-Italic.otf'),
        'SB Sans Text Light': require('assets/fonts/SBSansText-Light.otf'),
        'SB Sans Text Light Italic': require('assets/fonts/SBSansText-LightItalic.otf'),
        'SB Sans Text Medium': require('assets/fonts/SBSansText-Medium.otf'),
        'SB Sans Text': require('assets/fonts/SBSansText-Regular.otf'),
        'SB Sans Text Semibold': require('assets/fonts/SBSansText-Semibold.otf'),
        'SB Sans Text Semibold Italic': require('assets/fonts/SBSansText-SemiboldItalic.otf'),
        'SB Sans Text Thin': require('assets/fonts/SBSansText-Thin.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return <StorybookUIRoot />;
};
```

### Свойства и типы

| Название свойства | Тип       | Значение по умолчанию | Описание                         |
| ----------------- | --------- | --------------------- | -------------------------------- |
| style             | Style     | -                     | Объект для стилизации компонента |
| children          | ReactNode | -                     | Контент компонента               |
| bold              | boolean   | false                 | Полужирное начертание            |
| focused           | boolean   | -                     | Компонент находится в фокусе     |
| view              | string    | -                     | Вид компонента                   |
| size              | string    | -                     | Размер компонента                |

### Стилизация

Для того, чтобы изменить внешний вид компонента, необходимо использовать свойство `style`, в который можно передать объекты, содержащие наборы стилей типа `TextStyle`.

Пример стилизации компонента находится в разделе ниже.

### Примеры использования

#### Стандартный пример

```ts
import { View } from 'react-native';
import {
    BodyL,
    BodyM,
    BodyS,
    BodyXS,
    BodyXXS,
    DisplayL,
    DisplayM,
    DisplayS,
    H1,
    H2,
    H3,
    H4,
    H5,
    TextL,
    TextM,
    TextS,
    TextXS,
} from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return (
        <>
            <View>
                <BodyL>BodyL</BodyL>
                <BodyL bold>BodyL Bold</BodyL>
                <BodyM>BodyM</BodyM>
                <BodyM bold>BodyM Bold</BodyM>
                <BodyS>BodyS</BodyS>
                <BodyS bold>BodyS Bold</BodyS>
                <BodyXS>BodyXS</BodyXS>
                <BodyXS bold>BodyXS Bold</BodyXS>
                <BodyXXS>BodyXXS</BodyXXS>
                <BodyXXS bold>BodyXXS Bold</BodyXXS>
            </View>
            <View>
                <DisplayL>DisplayL</DisplayL>
                <DisplayL bold>DisplayL Bold</DisplayL>
                <DisplayM>DisplayM</DisplayM>
                <DisplayM bold>DisplayM Bold</DisplayM>
                <DisplayS>DisplayS</DisplayS>
                <DisplayS bold>DisplayS Bold</DisplayS>
            </View>
            <View>
                <H1>H1</H1>
                <H1 bold>H1 Bold</H1>
                <H2>H2</H2>
                <H2 bold>H2 Bold</H2>
                <H3>H3</H3>
                <H3 bold>H3 Bold</H3>
                <H4>H4</H4>
                <H4 bold>H4 Bold</H4>
                <H5>H5</H5>
                <H5 bold>H5 Bold</H5>
            </View>
            <View>
                <TextL>TextL</TextL>
                <TextL bold>TextL Bold</TextL>
                <TextM>TextM</TextM>
                <TextM bold>TextM Bold</TextM>
                <TextS>TextS</TextS>
                <TextS bold>TextS Bold</TextS>
                <TextXS>TextXS</TextXS>
                <TextXS bold>TextXS Bold</TextXS>
            </View>
        </>
    );
};

export default App;
```

#### Пример с переопределением стилей

```ts
import { BodyL, DisplayL, H1, TextL } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return (
        <>
            <BodyL
                style={{
                    root: {
                        color: 'green',
                    },
                }}
            >
                BodyL
            </BodyL>
            <DisplayL
                style={{
                    root: {
                        color: 'green',
                    },
                }}
            >
                DisplayL
            </DisplayL>
            <H1
                style={{
                    root: {
                        color: 'green',
                    },
                }}
            >
                H1
            </H1>
            <TextL
                style={{
                    root: {
                        color: 'green',
                    },
                }}
            >
                TextL
            </TextL>
        </>
    );
};

export default App;
```
