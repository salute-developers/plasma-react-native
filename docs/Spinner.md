## Spinner

Компонент отображающий состояние загрузки контента.

### Свойства и типы

| Название свойства | Тип    | Значение по умолчанию | Описание        |
| ----------------- | ------ | --------------------- | --------------- |
| width             | number | -                     | Ширина спиннера |
| height            | number | -                     | Высота спиннера |
| color             | string | -                     | Цвет спиннера   |
| view              | string | -                     | Вид спиннера    |
| size              | string | -                     | Размер спиннера |

### Примеры использования

#### Стандартный пример

```ts
import { Spinner } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return <Spinner view="accent" size="m" />;
};

export default App;
```

#### Пример с использованием стилевых свойств

```ts
import { Spinner } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return <Spinner height={100} width={100} color="green" />;
};

export default App;
```
