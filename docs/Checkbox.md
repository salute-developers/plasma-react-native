## Checkbox

Компонент позволяет управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.

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
import { Checkbox } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    const [checked, setChecked] = useState(false);

    const onValueChange = (value: boolean) => {
        setChecked(!value);
    };

    return (
        <Checkbox
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
import { Checkbox } from '@salutejs/plasma-star-ds-tv';

const name = 'languages';

const items = [
    {
        name,
        value: 'natural',
        label: 'Natural languages',
        disabled: false,
        description: 'Languages that people speak. They were not designed by people and they evolved naturally.',
    },
    { name, value: 'russian', label: 'Russian', disabled: false, parent: 'natural' },
    {
        name,
        value: 'english',
        label: 'English',
        disabled: false,
        parent: 'natural',
        description: 'The most spoken language in the world',
    },
    { name, value: 'french', label: 'French', disabled: false, parent: 'natural' },
    { name, value: 'klingon', label: 'Klingon', disabled: false, parent: 'natural' },
    { name, value: 'elvish', label: 'Elvish', disabled: true, parent: 'natural' },
    { name, value: 'dothraki', label: 'Dothraki', disabled: true, parent: 'natural' },
    {
        name,
        value: 'chinese',
        label: 'Chinese is the hardest language',
        parent: 'natural',
    },
];

const getChildren = (value: string) => items.filter((item) => item.parent === value);

const getState = (values: Record<string, boolean | undefined>, value: string) => {
    const allChildren = getChildren(value);

    if (!allChildren.length) {
        return { checked: values[value], indeterminate: false };
    }

    const checkedChildren = allChildren.filter((child) => values[child.value]);

    if (checkedChildren.length === 0) {
        return { checked: false, indeterminate: false };
    }

    if (allChildren.length !== checkedChildren.length) {
        return { checked: false, indeterminate: true };
    }

    return { checked: true, indeterminate: false };
};

const App = () => {
    const [values, setValues] = useState({
        russian: true,
        english: true,
        french: true,
        klingon: false,
        elvish: true,
        dothraki: false,
        chinese: true,
    });

    const onValueChange = (item: any, checked: boolean) => {
        if (item.parent) {
            setValues({ ...values, [item.value]: !checked });
        } else {
            setValues({
                ...values,
                ...getChildren(item.value).reduce((acc, child) => ({ ...acc, [child.value]: !checked }), {}),
            });
        }
    };

    return items.map((item) => (
        <Checkbox
            {...getState(values, item.value)}
            style={{
                root: {
                    marginLeft: item.parent ? 36 : 0,
                },
            }}
            key={item.value}
            name={item.name}
            value={item.value}
            label={item.label}
            disabled={item.disabled}
            description={item.description}
            onValueChange={(checked) => onValueChange(item, checked)}
        />
    ));
};

export default App;
```

#### Пример с переопределением стилей

```ts
import { Checkbox } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return (
        <Checkbox
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
