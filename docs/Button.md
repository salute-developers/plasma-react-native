## Button

Компонент, с помощью которого можно вызвать какое-либо действие и который может отображать текст с иконками.

### Свойства и типы

| Название свойства | Тип        | Значение по умолчанию | Описание                                                                                                                                                                                        |
| ----------------- | ---------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| style             | Style      | -                     | Объект для стилизации компонента                                                                                                                                                                |
| spacing           | Spacing    | 'packed'              | Расположение контента внутри кнопки                                                                                                                                                             |
| value             | string     | -                     | Значение кнопки                                                                                                                                                                                 |
| children          | ReactNode  | -                     | Контент кнопки                                                                                                                                                                                  |
| text              | string     | -                     | Текстовая надпись                                                                                                                                                                               |
| contentLeft       | ReactNode  | -                     | Слот для контента слева, например `Icon`                                                                                                                                                        |
| contentRight      | ReactNode  | -                     | Слот для контента справа, например `Icon`                                                                                                                                                       |
| isLoading         | boolean    | -                     | Состояние загрузки                                                                                                                                                                              |
| loader            | ReactNode  | -                     | Слот для контента загрузки                                                                                                                                                                      |
| stretching        | Stretching | 'auto'                | Поведение ширины кнопки. Может принимать три значения: fixed - кнопка фиксированной ширины; filled - кнопка занимает всю доступную ширину auto - кнопка растягивается в зависимости от контента |
| disabled          | boolean    | -                     | Кнопка неактивна                                                                                                                                                                                |
| pin               | Pin        | 'square-square'       | Скругление border-radius                                                                                                                                                                        |
| view              | string     | -                     | Вид кнопки                                                                                                                                                                                      |
| size              | string     | -                     | Размер кнопки                                                                                                                                                                                   |

#### Расширенные типы

Дополнительное описание типов

```ts
type Spacing = 'packed' | 'space-between';

type Stretching = 'fixed' | 'filled' | 'auto';

type Pin = |
    | 'square-square'
    | 'square-clear'
    | 'clear-square'
    | 'clear-clear'
    | 'clear-circle'
    | 'circle-clear'
    | 'circle-circle'
```

#### Взаимоисключающие свойства

Свойство `value` - это значение кнопки. Оно отображается справа от основного текста.

`value` и `contentRight` взаимоисключающие: если передано одно, второе передать нельзя.

### Стилизация

Для того, чтобы изменить внешний вид компонента, необходимо использовать свойство `style`, в который можно передать объекты, содержащие наборы стилей типа `ViewStyle` или `TextStyle`.

Пример стилизации компонента находится в разделе ниже.

### Примеры использования

#### Стандартный пример

```ts
import { Button } from '@salutejs/plasma-star-ds-tv';
import { IconPlasma } from '@salutejs/plasma-icons-native';

const App = () => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    return (
        <Button
            text="Hello"
            view="default"
            size="m"
            onPress={onPress}
            contentLeft={<IconPlasma />}
            contentRight={<IconPlasma />}
        />
    );
};

export default App;
```

#### Пример с использованием children

```ts
import { View, Text } from 'react-native';
import { Button } from '@salutejs/plasma-star-ds-tv';
import { IconPlasma } from '@salutejs/plasma-icons-native';

const App = () => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    return (
        <Button text="Hello" view="default" size="m" onPress={onPress}>
            <View>
                <IconPlasma />
                <Text>Text</Text>
                <IconPlasma />
            </View>
        </Button>
    );
};

export default App;
```

#### Пример с переопределением стилей

```ts
import { Button } from '@salutejs/plasma-star-ds-tv';
import { IconPlasma } from '@salutejs/plasma-icons-native';

const App = () => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    return (
        <Button
            text="Hello"
            view="default"
            size="m"
            onPress={onPress}
            contentLeft={<IconPlasma />}
            contentRight={<IconPlasma />}
            style={{
                background: {
                    backgroundColor: 'green',
                },
                root: {
                    height: 100,
                    margin: 24,
                },
                value: {
                    color: 'red',
                },
                text: {
                    color: 'orange',
                },
            }}
        />
    );
};

export default App;
```
