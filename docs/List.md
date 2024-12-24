## List

Компонент представляющий список элементов, по которым можно навигироваться с помощью различных устройств ввода. По умолчанию поддерживает компонент `Cell`.

### Свойства и типы

| Название свойства | Тип                              | Значение по умолчанию | Описание                         |
| ----------------- | -------------------------------- | --------------------- | -------------------------------- |
| style             | Style                            | -                     | Объект для стилизации компонента |
| view              | string                           | -                     | Вид ячейки                       |
| size              | string                           | -                     | Размер ячейки                    |
| items             | Array<T>                         | -                     | Список элементов                 |
| selectedItemIndex | number                           | -                     | Индекс выбранного элемента       |
| renderItem        | (item: T) => ReactNode           | -                     | Функция для отображения элемента |
| onItemSelect      | (index: number, item: T) => void | -                     | Обработчик выбора элемента       |
| onItemFocus       | (index: number, item: T) => void | -                     | Обработчик фокуса на элемент     |

#### Расширенные типы

Дополнительное описание типов

```ts
interface Item {
    contentLeft?: ReactNode;
    contentRight?: ReactNode;
    title?: string;
    subtitle?: string;
    label?: string;
    hasDisclosure?: boolean;
    disclosureText?: string;
    onItemPress?: () => void;
}
```

### Стилизация

Для того, чтобы изменить внешний вид компонента, необходимо использовать свойство `style`, в который можно передать объекты, содержащие наборы стилей типа `ViewStyle`.

Пример стилизации компонента находится в разделе ниже.

### Примеры использования

#### Стандартный пример

```ts
import { View, Text } from 'react-native';
import { useState } from 'react';
import type { ComponentProps } from 'react';
import { List, Checkbox, Radiobox, BodyL, Switch, Cell } from '@salutejs/plasma-star-ds-tv';
import { IconPlasma, IconShazam } from '@salutejs/plasma-icons-native';

const items = ({ switchChecked, checkboxChecked, radioboxChecked }: Record<string, boolean>) => [
    {
        exampleWithDisclosure: true,
        test: 'test',
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        onItemPress: () => {
            alert('Press on item');
        },
        hasDisclosure: true,
    },
    {
        exampleWithDisclosure: true,
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        onItemPress: () => {
            alert('Press on item');
        },
        disclosureText: 'Disclosure',
        hasDisclosure: true,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        name: 'checkboxChecked',
        contentRight: <Checkbox checked={checkboxChecked} />,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        name: 'radioboxChecked',
        contentRight: <Radiobox checked={radioboxChecked} />,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        name: 'switchChecked',
        contentRight: <Switch checked={switchChecked} />,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        contentRight: <IconPlasma />,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        contentRight: <BodyL>Hello</BodyL>,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        contentRight: <Text>Plain text</Text>,
    },
];

type CustomItem = ReturnType<typeof items>[number];

const renderItem = (size: ListProps['size']) => ({
    contentLeft,
    contentRight,
    label,
    subtitle,
    title,
    disclosureText,
    hasDisclosure,
    exampleWithDisclosure,
}: CustomItem) => {
    if (exampleWithDisclosure) {
        return (
            <Cell
                size={size}
                contentLeft={contentLeft}
                label={label}
                title={title}
                subtitle={subtitle}
                hasDisclosure={hasDisclosure}
                disclosureText={disclosureText}
            />
        );
    }

    return (
        <Cell
            size={size}
            contentLeft={contentLeft}
            contentRight={contentRight}
            label={label}
            title={title}
            subtitle={subtitle}
        />
    );
};

const App = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState<undefined | number>(undefined);
    const [inputState, setInputState] = useState<Record<string, boolean>>({
        checkboxChecked: false,
        radioboxChecked: false,
        switchChecked: false,
    });

    const onSelectItem = (index: number, item: CustomItem) => {
        setSelectedItemIndex(selectedItemIndex === index ? undefined : index);

        if (item.name) {
            const { name } = item;
            setInputState((values) => ({ ...values, [name]: !inputState[name] }));
        }
    };

    return (
        <View style={{ gap: 20, padding: 50, width: '50%' }}>
            <List
                view="default"
                size="m"
                selectedItemIndex={selectedItemIndex}
                onItemSelect={onSelectItem}
                renderItem={renderItem('m')}
                items={items(inputState)}
            />
        </View>
    );
};

export default App;
```

#### Пример с переопределением стилей

```ts
import { List } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return (
        <List
            view="default"
            size="m"
            renderItem={() => null}
            items={[]}
            style={{
                root: {
                    padding: 40,
                },
            }}
        />
    );
};

export default App;
```
