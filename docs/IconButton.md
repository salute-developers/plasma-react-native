## IconButton

Компонент, с помощью которого можно вызвать какое-либо действие и который может отображать иконку.

### Свойства и типы

| Название свойства | Тип       | Значение по умолчанию | Описание                         |
| ----------------- | --------- | --------------------- | -------------------------------- |
| style             | Style     | -                     | Объект для стилизации компонента |
| children          | ReactNode | -                     | Контент кнопки                   |
| isLoading         | boolean   | -                     | Состояние загрузки               |
| loader            | ReactNode | -                     | Слот для контента загрузки       |
| disabled          | boolean   | -                     | Кнопка неактивна                 |
| pin               | Pin       | 'square-square'       | Скругление border-radius         |
| view              | string    | -                     | Вид кнопки                       |
| size              | string    | -                     | Размер кнопки                    |

#### Расширенные типы

Дополнительное описание типов

```ts
type Pin = |
    | 'square-square'
    | 'square-clear'
    | 'clear-square'
    | 'clear-clear'
    | 'clear-circle'
    | 'circle-clear'
    | 'circle-circle'
```

### Стилизация

Для того, чтобы изменить внешний вид компонента, необходимо использовать свойство `style`, в который можно передать объекты, содержащие наборы стилей типа `ViewStyle` или `TextStyle`.

Пример стилизации компонента находится в разделе ниже.

### Примеры использования

#### Стандартный пример

#### Пример с использованием children

```ts
import { View, Text } from 'react-native';
import { IconButton } from '@salutejs/plasma-star-ds-tv';
import { IconPlasma } from '@salutejs/plasma-icons-native';

const App = () => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    return (
        <IconButton view="default" size="m" onPress={onPress}>
            <IconPlasma />
        </IconButton>
    );
};

export default App;
```

#### Пример с переопределением стилей

```ts
import { IconButton } from '@salutejs/plasma-star-ds-tv';
import { IconPlasma } from '@salutejs/plasma-icons-native';

const App = () => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    return (
        <IconButton
            view="default"
            size="m"
            onPress={onPress}
            style={{
                background: {
                    backgroundColor: 'green',
                },
                root: {
                    height: 100,
                    margin: 24,
                },
            }}
        >
            <IconPlasma />
        </IconButton>
    );
};

export default App;
```
