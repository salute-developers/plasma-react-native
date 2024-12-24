## TextField

Компонент, представляющий однострочное текстовое поле для ввода значений.

### Свойства и типы

| Название свойства | Тип                     | Значение по умолчанию | Описание                                         |
| ----------------- | ----------------------- | --------------------- | ------------------------------------------------ |
| style             | Style                   | -                     | Объект для стилизации компонента                 |
| label             | string                  | -                     | Метка-подпись к элементу                         |
| labelPlacement    | LabelPlacement          | -                     | Расположение лейбла                              |
| captionLeft       | string                  | -                     | Вспомогательный текст снизу слева для поля ввода |
| contentLeft       | ReactNode               | -                     | Слот для контента слева.                         |
| contentRight      | ReactNode               | -                     | Слот для контента справа.                        |
| textBefore        | string                  | -                     | Слот для вспомогательного текста справа          |
| textAfter         | string                  | -                     | Слот для вспомогательного текста слева           |
| readOnly          | boolean                 | -                     | Компонент доступен только для чтения             |
| disabled          | boolean                 | -                     | Текстовое поле неактивно                         |
| view              | string                  | -                     | Вид текстового поля                              |
| size              | string                  | -                     | Размер текстового поля                           |
| onValueChange     | (value: string) => void | -                     | Обработчик изменения значение текстового поля    |

### Стилизация

Для того, чтобы изменить внешний вид компонента, необходимо использовать свойство `style`, в который можно передать объекты, содержащие наборы стилей типа `ViewStyle` или `TextStyle`.

Пример стилизации компонента находится в разделе ниже.

### Примеры использования

#### Стандартный пример

```ts
import { useState } from 'react';
import { TextField } from '@salutejs/plasma-star-ds-tv';
import { IconShazam, IconScribbleDiagonal } from '@salutejs/plasma-icons-native';

const App = () => {
    const [value, setValue] = useState('');

    const onValueChange = (newValue: string) => {
        setValue(newValue);
    };

    return (
        <TextField
            view="default"
            size="m"
            label="Label"
            labelPlacement="outer"
            textBefore="TB"
            textAfter="TA"
            placeholder="Placeholder"
            captionLeft="Caption"
            value={value}
            onValueChange={onValueChange}
            contentLeft={<IconScribbleDiagonal />}
            contentRight=<IconShazam />}
        />
    );
};

export default App;
```

#### Пример с переопределением стилей

```ts
import { TextField } from '@salutejs/plasma-star-ds-tv';
import { IconShazam, IconScribbleDiagonal } from '@salutejs/plasma-icons-native';

const App = () => {
    return (
        <TextField
            view="default"
            size="m"
            label="Label"
            labelPlacement="outer"
            textBefore="TB"
            textAfter="TA"
            placeholder="Placeholder"
            captionLeft="Caption"
            value="Value"
            contentLeft={<IconScribbleDiagonal />}
            contentRight=<IconShazam />}
            style={{
                captionLeft: {
                    color: 'red',
                },
                inputLabelWrapper: {
                    height: 20,
                },
                inputWrapper: {
                    padding: 30,
                },
                label: {
                    color: 'green',
                },
                textInput: {
                    backgroundColor: 'blue',
                },
                root: {
                    height: 40,
                },
                textAfter: {
                    color: 'gray',
                },
                textBefore: {
                    color: 'lightgray',
                },
                contentLeft: {
                    width: 30,
                    height: 30,
                },
                contentRight: {
                    width: 30,
                    height: 30,
                },
            }}
        />
    );
};

export default App;
```
