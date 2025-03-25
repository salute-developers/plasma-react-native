## Card

Компонент, с помощью которого можно отображать изображение, иконки, лейблы и текст, а также вызвать какое-либо действие.

### Свойства и типы

| Название свойства  | Тип       | Значение по умолчанию | Описание                                         |
| ------------------ | --------- | --------------------- | ------------------------------------------------ |
| style              | Style     | -                     | Объект для стилизации компонента                 |
| contentTopLeft     | ReactNode | -                     | Слот для контента слева сверху, например `Icon`  |
| contentTopRight    | ReactNode | -                     | Слот для контента справа сверху, например `Icon` |
| contentBottomRight | ReactNode | -                     | Слот для контента справа снизу, например `Icon`  |
| contentBottomLeft  | ReactNode | -                     | Слот для контента слева снизу, например `Icon`   |
| alignTextBox       | AlignProp | -                     | Горизонтальное выравнивание текстового блока     |
| title              | string    | -                     | Текст для Title                                  |
| subtitle           | string    | -                     | Текст для Subtitle                               |
| image              | ReactNode | -                     | Слот для компонента изображения                  |
| timelineValue      | number    | -                     | Значение прогресса в процентах                   |
| disabled           | boolean   | -                     | Карточка неактивна                               |
| view               | string    | -                     | Вид карточки                                     |
| size               | string    | -                     | Размер карточки                                  |

#### Расширенные типы

Дополнительное описание типов

```ts
export type AlignProp = 'center' | 'left' | 'right';
```

### Стилизация

Для того, чтобы изменить внешний вид компонента, необходимо использовать свойство `style`, в который можно передать объекты, содержащие наборы стилей типа `ViewStyle` или `TextStyle`.

Пример стилизации компонента находится в разделе ниже.

### Примеры использования

#### Пример с горизонтальной карточкой

```ts
import { Image, Text, View } from 'react-native';
import { Card } from '@salutejs/plasma-star-ds-tv';
import { IconPlasma, IconShazam } from '@salutejs/plasma-icons-native';

const App = () => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    const images: Record<string, any> = {
        s: {
            source: require('./src/card_horizontal_s.png'),
            imageSize: { width: 188, height: 106 },
            iconSize: 's',
            textSize: 10,
        },
    };

    const styles = images['s'];

    return (
        <View style={{ padding: 40 }}>
            <Card
                title="Title"
                subtitle="Subtitle"
                timelineValue={50}
                size="s"
                ratio="horizontal"
                onPress={onPress}
                image={<Image source={styles.source} style={styles.imageSize} />}
                contentTopLeft={<IconPlasma size={styles.iconSize} />}
                contentTopRight={<IconShazam size={styles.iconSize} />}
                contentBottomRight={<IconPlasma size={styles.iconSize} />}
                contentBottomLeft={
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: styles.textSize }}>Ещё 1 ч 35 мин</Text>
                }
            />
        </View>
    );
};

export default App;
```

#### Пример с квадратной карточкой

```ts
import { Image, Text, View } from 'react-native';
import { Card } from '@salutejs/plasma-star-ds-tv';
import { IconPlasma, IconShazam } from '@salutejs/plasma-icons-native';

const App = () => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    const images: Record<string, any> = {
        l: {
            source: require('./src/card_square_l.png'),
            imageSize: { width: 256, height: 256 },
            iconSize: 's',
            textSize: 10,
        },
    };

    const styles = images['l'];

    return (
        <View style={{ padding: 40 }}>
            <Card
                title="Title"
                subtitle="Subtitle"
                timelineValue={50}
                size="l"
                ratio="square"
                onPress={onPress}
                image={<Image source={styles.source} style={styles.imageSize} />}
                contentTopLeft={<IconPlasma size={styles.iconSize} />}
                contentTopRight={<IconShazam size={styles.iconSize} />}
                contentBottomRight={<IconPlasma size={styles.iconSize} />}
                contentBottomLeft={
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: styles.textSize }}>Ещё 1 ч 35 мин</Text>
                }
            />
        </View>
    );
};

export default App;
```

#### Пример с вертикальной карточкой

```ts
import { Image, Text, View } from 'react-native';
import { Card } from '@salutejs/plasma-star-ds-tv';
import { IconPlasma, IconShazam } from '@salutejs/plasma-icons-native';

const App = () => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    const images: Record<string, any> = {
        m: {
            source: require('./src/card_vertical_m.png'),
            imageSize: { width: 188, height: 256 },
            iconSize: 's',
            textSize: 10,
        },
    };

    const styles = images['m'];

    return (
        <View style={{ padding: 40 }}>
            <Card
                title="Title"
                subtitle="Subtitle"
                timelineValue={50}
                size="l"
                ratio="vertical"
                image={<Image source={styles.source} style={styles.imageSize} />}
                contentTopLeft={<IconPlasma size={styles.iconSize} />}
                contentTopRight={<IconShazam size={styles.iconSize} />}
                contentBottomRight={<IconPlasma size={styles.iconSize} />}
                contentBottomLeft={
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: styles.textSize }}>Ещё 1 ч 35 мин</Text>
                }
            />
        </View>
    );
};

export default App;
```

#### Пример с переопределением стилей

```ts
import { Image, Text, View } from 'react-native';
import { Card } from '@salutejs/plasma-star-ds-tv';
import { IconPlasma, IconShazam } from '@salutejs/plasma-icons-native';

const App = () => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    const images: Record<string, any> = {
        m: {
            source: require('./src/card_vertical_m.png'),
            imageSize: { width: 188, height: 256 },
            iconSize: 's',
            textSize: 10,
        },
    };

    const styles = images['m'];

    return (
        <View style={{ padding: 40 }}>
            <Card
                title="Title"
                subtitle="Subtitle"
                timelineValue={50}
                size="l"
                ratio="vertical"
                image={<Image source={styles.source} style={styles.imageSize} />}
                contentTopLeft={<IconPlasma size={styles.iconSize} />}
                contentTopRight={<IconShazam size={styles.iconSize} />}
                contentBottomRight={<IconPlasma size={styles.iconSize} />}
                contentBottomLeft={
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: styles.textSize }}>Ещё 1 ч 35 мин</Text>
                }
                style={{
                    root: {
                        backgroundColor: 'blue',
                    },
                    wrapper: {
                        padding: 20,
                    },
                    image: {
                        margin: -20,
                    },
                    content: {
                        margin: 20,
                    },
                    textBox: {
                        gap: 15,
                    },
                    title: {
                        fontSize: 20,
                        color: 'red',
                    },
                    subtitle: {
                        fontSize: 14,
                        color: 'black',
                    },
                    contentBottomLeft: {
                        top: 0,
                        left: 0,
                    },
                    contentBottomRight: {
                        top: 0,
                        left: 0,
                    },
                    contentTopLeft: {
                        top: 0,
                        left: 0,
                    },
                    contentTopRight: {
                        top: 0,
                        left: 0,
                    },
                    timelineBar: {
                        backgroundColor: 'green',
                    },
                    timelineProgress: {
                        backgroundColor: 'yellow',
                    },
                }}
            />
        </View>
    );
};

export default App;
```
