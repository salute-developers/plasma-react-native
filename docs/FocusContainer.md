## FocusContainer

Компонент-обёртка предназначенный для добавления фокусного состояния на пользовательские элементы.

### Свойства и типы

| Название свойства        | Тип                                    | Значение по умолчанию | Описание                                                                |
| ------------------------ | -------------------------------------- | --------------------- | ----------------------------------------------------------------------- |
| children                 | (state: FocusProps) => React.ReactNode | -                     | Функция, которая возвращает компонент, на который нужно сфокусироваться |
| unfocusedBackgroundColor | string                                 | -                     | Бэкграунд компонента вне фокуса                                         |
| unfocusedTextColor       | string                                 | -                     | Цвет текста компонента вне фокуса                                       |

#### Расширенные типы

Дополнительное описание типов

```ts
interface FocusProps {
    focusedTextColor: string;
    focusedBackgroundColor: string;
    focusedScale: number;
    focused?: boolean;
    pressed?: boolean;
}
```

### Стилизация

#### С помощью нативного свойства focused

У большинства компонент библиотеки, которые могут находиться в фокусе, есть контролируемое булевое свойство `focused`.

С помощью `FocusContainer` это свойство можно вынести из аргументов колбэк–функции и применить его на компоненты.

```ts
import { View } from 'react-native';
import { FocusContainer, Checkbox, BodyM, H2 } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return (
        <FocusContainer>
            {({ focused }) => (
                <View>
                    <Checkbox label="Label" focused={focused} />
                    <H2 focused={focused}>Title</H2>
                    <BodyM focused={focused}>Subtitle</BodyM>
                </View>
            )}
        </FocusContainer>
    );
};

export default App;
```

#### С помощью заранее заданных цветов

У компонента `FocusContainer` есть свойства `unfocusedBackgroundColor` и `unfocusedTextColor`, которые прокидываются в аргументы колбэк-функции `focusedBackgroundColor` и `focusedTextColor` соответственно и возвращают либо заданное пользователем значение если компонент находится вне фокуса, либо заданное дизайн системой если компонент в фокусе.

```ts
import { View, Text } from 'react-native';
import { FocusContainer } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return (
        <FocusContainer unfocusedBackgroundColor="#ffffff1f" unfocusedTextColor="lightblue">
            {({ focused, focusedBackgroundColor, focusedScale, focusedTextColor }) => {
                const styles = {
                    root: {
                        width: 300,
                        height: 150,
                        padding: 16,
                    },
                    background: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        borderRadius: 16,
                        backgroundColor: focusedBackgroundColor,
                        transform: [
                            {
                                scale: focusedScale,
                            },
                        ],
                    } as any,
                    text: {
                        color: focusedTextColor,
                    },
                };

                return (
                    <View style={styles.root}>
                        <View style={styles.background} />
                        <Text style={styles.text}>Text</Text>
                    </View>
                );
            }}
        </FocusContainer>
    );
};

export default App;
```
