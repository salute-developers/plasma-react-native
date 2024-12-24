## Cell

Компонент, представляющий собой ячейку со слотами, который может встраиваться в другие компоненты (`List`, и т.д.)

### Свойства и типы

| Название свойства | Тип        | Значение по умолчанию | Описание                                                                                                                                                                                |
| ----------------- | ---------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| style             | Style      | -                     | Объект для стилизации компонента                                                                                                                                                        |
| contentLeft       | ReactNode  | -                     | Слот для контента слева, например `Icon`                                                                                                                                                |
| title             | string     | -                     | Текст для Title                                                                                                                                                                         |
| subtitle          | string     | -                     | Текст для Subtitle                                                                                                                                                                      |
| label             | string     | -                     | Текст для Label                                                                                                                                                                         |
| alignContentLeft  | AlignProp  | 'center'              | Вертикальное выравнивание контента слева                                                                                                                                                |
| stretching        | Stretching | 'filled'              | Ширина ячейки. Может принимать три значения: fixed - ячейка фиксированной ширины; filled - ячейка занимает всю доступную ширину auto - ячейка растягивается в зависимости от контента / |
| focused           | boolean    | -                     | Компонент находится в фокусе                                                                                                                                                            |
| view              | string     | -                     | Вид ячейки                                                                                                                                                                              |
| size              | string     | -                     | Размер ячейки                                                                                                                                                                           |

#### Расширенные типы

Дополнительное описание типов

```ts
type AlignProp = 'center' | 'top' | 'bottom';

type Stretching = 'fixed' | 'filled' | 'auto';
```

#### Взаимоисключающие свойства

Дополнительная типизация для случаев, когда есть свойство `alignContentRight`

| Название свойства | Тип       | Значение по умолчанию | Описание                                   |
| ----------------- | --------- | --------------------- | ------------------------------------------ |
| alignContentRight | AlignProp | 'center'              | Вертикальное выравнивание контента справа. |
| contentRight      | ReactNode | -                     | Слот для контента справа, например `Icon`  |
| hasDisclosure     | never     | -                     | Отображать стрелку                         |
| disclosureText    | never     | -                     | Поясняющий текст                           |

Дополнительная типизация для случаев, когда есть свойство `hasDisclosure`

| Название свойства | Тип     | Значение по умолчанию | Описание                                   |
| ----------------- | ------- | --------------------- | ------------------------------------------ |
| alignContentRight | never   | 'center'              | Вертикальное выравнивание контента справа. |
| contentRight      | never   | -                     | Слот для контента справа, например `Icon`  |
| hasDisclosure     | boolean | -                     | Отображать стрелку                         |
| disclosureText    | string  | -                     | Поясняющий текст                           |

### Стилизация

Для того, чтобы изменить внешний вид компонента, необходимо использовать свойство `style`, в который можно передать объекты, содержащие наборы стилей типа `ViewStyle` или `TextStyle`.

Пример стилизации компонента находится в разделе ниже.

### Примеры использования

#### Стандартный пример

```ts
import { View, Text } from 'react-native';
import { Cell, Checkbox, Radiobox, Switch, BodyM } from '@salutejs/plasma-star-ds-tv';
import { IconShazam } from '@salutejs/plasma-icons-native';

const App = () => {
    return (
        <View style={{ gap: 20 }}>
            <Cell
                contentLeft={<IconShazam />}
                contentRight={<IconPlasma />}
                view="default"
                size="m"
                stretching="filled"
                label="Label"
                title="Title"
                subtitle="Subtitle"
                alignContentLeft="center"
                alignContentRight="center"
            />
            <Cell
                contentLeft={<IconShazam />}
                view="default"
                size="m"
                stretching="filled"
                label="Label"
                title="Title"
                subtitle="Subtitle"
                alignContentLeft="center"
                alignContentRight="center"
            />
            <Cell
                hasDisclosure
                contentLeft={<IconShazam />}
                view="default"
                size="m"
                stretching="filled"
                label="Label"
                title="Title"
                subtitle="Subtitle"
                alignContentLeft="center"
            />
            <Cell
                disclosureText="Disclosure"
                hasDisclosure
                contentLeft={<IconShazam />}
                view="default"
                size="m"
                stretching="filled"
                label="Label"
                title="Title"
                subtitle="Subtitle"
                alignContentLeft="center"
            />
            <Cell
                contentLeft={<IconShazam />}
                contentRight={<Checkbox checked />}
                view="default"
                size="m"
                stretching="filled"
                label="Label"
                title="Title"
                subtitle="Subtitle"
                alignContentLeft="center"
                alignContentRight="center"
            />
            <Cell
                contentLeft={<IconShazam />}
                contentRight={<Radiobox checked />}
                view="default"
                size="m"
                stretching="filled"
                label="Label"
                title="Title"
                subtitle="Subtitle"
                alignContentLeft="center"
                alignContentRight="center"
            />
            <Cell
                contentLeft={<IconShazam />}
                contentRight={<Switch checked />}
                view="default"
                size="m"
                stretching="filled"
                label="Label"
                title="Title"
                subtitle="Subtitle"
                alignContentLeft="center"
                alignContentRight="center"
            />
            <Cell
                contentLeft={<IconShazam />}
                contentRight={<Text>Plain text</Text>}
                view="default"
                size="m"
                stretching="filled"
                label="Label"
                title="Title"
                subtitle="Subtitle"
                alignContentLeft="center"
                alignContentRight="center"
            />
            <Cell
                contentLeft={<IconShazam />}
                contentRight={<BodyM>BodyM</BodyM>}
                view="default"
                size="m"
                stretching="filled"
                label="Label"
                title="Title"
                subtitle="Subtitle"
                alignContentLeft="center"
                alignContentRight="center"
            />
        </View>
    );
};

export default App;
```

#### Пример с переопределением стилей

```ts
import { Cell } from '@salutejs/plasma-star-ds-tv';
import { IconShazam } from '@salutejs/plasma-icons-native';

const App = () => {
    return (
        <Cell
            contentLeft={<IconShazam />}
            contentRight={<IconPlasma />}
            view="default"
            size="m"
            stretching="filled"
            label="Label"
            title="Title"
            subtitle="Subtitle"
            alignContentLeft="center"
            alignContentRight="center"
            style={{
                contentRight: {
                    width: 30,
                    height: 30,
                },
                contentRightText: {
                    color: 'gray',
                },
                contentLeft: {
                    width: 30,
                    height: 30,
                },
                container: {
                    padding: 30,
                },
                label: {
                    color: 'red',
                },
                subtitle: {
                    color: 'blue',
                },
                title: {
                    color: 'green',
                },
                root: {
                    height: 50,
                },
            }}
        />
    );
};

export default App;
```
