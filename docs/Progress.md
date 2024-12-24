## Progress

Компонент, который отображает состояние прогресса какого-либо действия.

### Свойства и типы

| Название свойства | Тип     | Значение по умолчанию | Описание                               |
| ----------------- | ------- | --------------------- | -------------------------------------- |
| style             | Style   | -                     | Объект для стилизации компонента       |
| value             | number  | -                     | Значение прогресса в процентах         |
| displayValue      | boolean | true                  | Отображать числовое значение прогресса |
| view              | string  | -                     | Вид прогресса                          |
| size              | string  | -                     | Размер прогресса                       |

### Стилизация

Для того, чтобы изменить внешний вид компонента, необходимо использовать свойство `style`, в который можно передать объекты, содержащие наборы стилей типа `ViewStyle`, или `TextStyle`.

Пример стилизации компонента находится в разделе ниже.

### Примеры использования

#### Стандартный пример

```ts
import { Progress } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return <Progress view="default" size="m" displayValue value={25} />;
};

export default App;
```

#### Пример с переопределением стилей

```ts
import { Progress } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return (
        <Progress
            view="default"
            size="m"
            displayValue
            value={25}
            style={{
                bar: {
                    backgroundColor: 'green',
                },
                progress: {
                    backgroundColor: 'red',
                },
                root: {
                    height: 50,
                },
                track: {
                    backgroundColor: 'blue',
                },
                value: {
                    color: 'orange',
                },
            }}
        />
    );
};

export default App;
```
