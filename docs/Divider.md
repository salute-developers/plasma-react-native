## Divider

Компонент используется для визуального разделения других компонент.

### Свойства и типы

| Название свойства | Тип             | Значение по умолчанию | Описание                      |
| ----------------- | --------------- | --------------------- | ----------------------------- |
| view              | string          | -                     | Вид разделителя               |
| size              | string          | -                     | Размер разделителя            |
| orientation       | OrientationProp | 'horizontal'          | Направление разделителя       |
| length            | number          | 100                   | Длина разделителя в процентах |

#### Расширенные типы

Дополнительное описание типов

```ts
type OrientationProp = 'horizontal' | 'vertical';
```

### Примеры использования

#### Стандартный пример

```ts
import { Divider } from '@salutejs/plasma-star-ds-tv';

const App = () => {
    return <Divider view="default" value={50} size="m" />;
};

export default App;
```
