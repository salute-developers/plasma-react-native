## Switch

Компонент-переключатель между двумя взаимоисключающими состояниями — вкл. и выкл.

### Свойства и типы

| Название свойства | Тип                      | Значение по умолчанию | Описание                                                     |
| ----------------- | ------------------------ | --------------------- | ------------------------------------------------------------ |
| style             | Style                    | -                     | Объект для стилизации компонента                             |
| name              | string                   | -                     | Определяет уникальное имя элемента формы                     |
| checked           | boolean                  | -                     | Помечен ли такой элемент формы, как флажок или переключатель |
| value             | string                   | -                     | Значение компонента свитч                                    |
| label             | string                   | -                     | Метка-подпись к элементу                                     |
| description       | ReactNode                | -                     | Описание элемента                                            |
| disabled          | boolean                  | -                     | Свитч неактивен                                              |
| focused           | boolean                  | -                     | Компонент находится в фокусе                                 |
| view              | string                   | -                     | Вид свитча                                                   |
| size              | string                   | -                     | Размер свитча                                                |
| onValueChange     | (value: boolean) => void | -                     | Обработчик изменения состояния свитча                        |

### Стилизация

Для того, чтобы изменить внешний вид компонента, необходимо использовать свойство `style`, в который можно передать объекты, содержащие наборы стилей типа `ViewStyle` или `TextStyle`.

Пример стилизации компонента находится в разделе ниже.

### Примеры использования

#### Стандартный пример

```ts
import { useState } from 'react';
import { View } from 'react-native';
import { Switch } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    const [checked, setChecked] = useState(false);

    const onValueChange = (value: boolean) => {
        setChecked(!value);
    };

    return (
        <View style={{ width: 250 }}>
            <Switch
                checked={checked}
                view="default"
                size="m"
                description="Description"
                label="Label"
                onValueChange={onValueChange}
            />
        </View>
    );
};

export default App;
```

#### Пример с переопределением стилей

```ts
import { Switch } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return (
        <Switch
            checked
            view="default"
            size="m"
            description="Description"
            label="Label"
            style={{
                description: {
                    color: 'red',
                },
                label: {
                    color: 'green',
                },
                root: {
                    height: 20,
                },
                thumb: {
                    backgroundColor: 'blue',
                },
                track: {
                    backgroundColor: 'gray',
                },
                wrapper: {
                    padding: 10,
                },
            }}
        />
    );
};

export default App;
```
