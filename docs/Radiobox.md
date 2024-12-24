## Radiobox

Компонент позволяет выбирать одно состояние из списка.

### Свойства и типы

| Название свойства | Тип                      | Значение по умолчанию | Описание                                                               |
| ----------------- | ------------------------ | --------------------- | ---------------------------------------------------------------------- |
| style             | Style                    | -                     | Объект для стилизации компонента                                       |
| name              | string                   | -                     | Определяет уникальное имя элемента формы                               |
| checked           | boolean                  | -                     | Помечен ли такой элемент формы, как флажок или переключатель           |
| value             | string                   | -                     | Значение компонента чекбокс                                            |
| label             | ReactNode                | -                     | Метка-подпись к элементу                                               |
| description       | ReactNode                | -                     | Описание элемента                                                      |
| singleLine        | boolean                  | -                     | Label и description в одну строку или с переносом строк                |
| indeterminate     | boolean                  | -                     | Неопределенное состояние компонента - когда часть потомков не выбрана. |
| disabled          | boolean                  | -                     | Чекбокс неактивен                                                      |
| focused           | boolean                  | -                     | Компонент находится в фокусе                                           |
| view              | string                   | -                     | Вид чекбокса                                                           |
| size              | string                   | -                     | Размер чекбокса                                                        |
| onValueChange     | (value: boolean) => void | -                     | Обработчик изменения состояния чекбокса                                |

### Стилизация

Для того, чтобы изменить внешний вид компонента, необходимо использовать свойство `style`, в который можно передать объекты, содержащие наборы стилей типа `ViewStyle` или `TextStyle`.

Пример стилизации компонента находится в разделе ниже.

### Примеры использования

#### Стандартный пример

```ts
import { useState } from 'react';
import { Radiobox } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    const [checked, setChecked] = useState(false);

    const onValueChange = (value: boolean) => {
        setChecked(!value);
    };

    return (
        <Radiobox
            name="name"
            value="value"
            singleLine
            label="Label"
            description="Description"
            checked={checked}
            onValueChange={onValueChange}
        />
    );
};

export default App;
```

#### Комплексный пример с группой

```ts
import { useState } from 'react';
import { Radiobox } from '@salutejs/plasma-star-ds-tv';

const langName = 'language';

const items = [
    {
        name: langName,
        value: 'c',
        label: 'C',
        disabled: false,
        description: 'A general-purpose, procedural computer programming language',
    },
    { name: langName, value: 'cpp', label: 'C++', disabled: false },
    { name: langName, value: 'assembly', label: 'Assembly', disabled: false },
    { name: langName, value: 'elixir', label: 'Elixir', disabled: true },
];

const App = () => {
    const [checkedValue, setCheckedValue] = useState('cpp');

    const onValueChange = (item: any) => {
        setCheckedValue(item.value);
    };

    return items.map((item) => (
        <Radiobox
            checked={item.value === checkedValue}
            key={item.value}
            name={item.name}
            value={item.value}
            label={item.label}
            disabled={item.disabled}
            description={item.description}
            onValueChange={() => onValueChange(item)}
        />
    ));
};

export default App;
```

#### Пример с переопределением стилей

```ts
import { Radiobox } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return (
        <Radiobox
            name="name"
            value="value"
            singleLine
            label="Label"
            description="Description"
            checked
            style={{
                content: {
                    margin: 20,
                },
                description: {
                    color: 'red',
                },
                label: {
                    color: 'green',
                },
                root: {
                    padding: 10,
                },
                trigger: {
                    backgroundColor: 'blue',
                    height: 30,
                    width: 30,
                },
                wrapper: {
                    height: 50,
                },
            }}
        />
    );
};

export default App;
```
