## Skeleton

Компоненты, с помощью которых можно продемонстрировать загрузку контента подстроив их под форму загружаемого блока.

### Свойства и типы

#### TextSkeleton

| Название свойства   | Тип                              | Значение по умолчанию | Описание                                                                                         |
| ------------------- | -------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------ |
| style               | Style                            | -                     | Объект для стилизации компонента                                                                 |
| roundness           | Roundness                        | -                     | Размер скругления скелетона                                                                      |
| lighter             | boolean                          | -                     | Применить более светлый градиент                                                                 |
| lines               | number                           | -                     | Количество линий скелетона                                                                       |
| width               | number                           | -                     | Заданная ширина линий в процентах; по умолчанию подбирается случайная для заданного кол-ва линий |
| size                | string                           | -                     | Размер скелетона                                                                                 |
| customGradientColor | Gradient[string][string][number] | -                     | Пользовательский цвет градиента скелетона                                                        |

##### Расширенные типы

Дополнительное описание типов

```ts
type Roundness = 250 | 32 | 28 | 24 | 20 | 18 | 16 | 14 | 12 | 8 | 0;

interface LinearGradientType {
    kind: 'linear';
    locations: ReadonlyArray<number>;
    colors: ReadonlyArray<string>;
    angle: number;
}

interface RadialGradientType {
    kind: 'radial';
    locations: ReadonlyArray<number>;
    colors: ReadonlyArray<string>;
    centerX: number;
    centerY: number;
    radius: number;
}

interface BackgroundGradientType {
    kind: 'color';
    background: string;
}

interface Gradient {
    [k: string]: {
        [k: string]: ReadonlyArray<LinearGradientType | RadialGradientType | BackgroundGradientType>;
    };
}
```

#### RectSkeleton

| Название свойства | Тип       | Значение по умолчанию | Описание                         |
| ----------------- | --------- | --------------------- | -------------------------------- |
| style             | Style     | -                     | Объект для стилизации компонента |
| roundness         | Roundness | -                     | Размер скругления скелетона      |
| lighter           | boolean   | -                     | Применить более светлый градиент |
| height            | number    | -                     | Высота скелетона скелетона       |
| width             | number    | -                     | Ширина скелетона                 |

#### LineSkeleton

| Название свойства | Тип       | Значение по умолчанию | Описание                         |
| ----------------- | --------- | --------------------- | -------------------------------- |
| style             | Style     | -                     | Объект для стилизации компонента |
| roundness         | Roundness | -                     | Размер скругления скелетона      |
| lighter           | boolean   | -                     | Применить более светлый градиент |
| size              | string    | -                     | Размер скелетона                 |

### Стилизация

Для того, чтобы изменить внешний вид компонента, необходимо использовать свойство `style`, в который можно передать объекты, содержащие наборы стилей типа `ViewStyle`.

Пример стилизации компонента находится в разделе ниже.

### Примеры использования

#### Стандартный пример

```ts
import { LineSkeleton, RectSkeleton, TextSkeleton } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return (
        <>
            <LineSkeleton size="bodyM" roundness={16} />
            <RectSkeleton size="bodyM" roundness={16} width={150} height={100} />
            <TextSkeleton size="bodyM" roundness={16} lines={4} />
        </>
    );
};

export default App;
```

#### Пример с переопределением стилей

```ts
import { LineSkeleton, RectSkeleton, TextSkeleton } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return (
        <>
            <LineSkeleton
                size="bodyM"
                roundness={16}
                style={{
                    placeholder: {
                        height: 50,
                    },
                    root: {
                        margin: 20,
                    },
                }}
            />
            <RectSkeleton
                size="bodyM"
                roundness={16}
                width={150}
                height={100}
                style={{
                    placeholder: {
                        height: 50,
                    },
                    root: {
                        margin: 20,
                    },
                }}
            />
            <TextSkeleton
                size="bodyM"
                roundness={16}
                lines={4}
                style={{
                    placeholder: {
                        height: 50,
                    },
                    root: {
                        margin: 20,
                    },
                }}
            />
        </>
    );
};

export default App;
```
