# Plasma React Native

Это репозиторий, который содержит набор библиотек, реализующие дизайн системы для платформы react-native.

## Файловая структура

-   `core` - содержит библиотеки, которые являются обязательными зависимостями для работы дизайн системы.
-   `libraries` - содержит пользовательские библиотеки компонентов.
-   `packages` - содержит утилитарные пакеты, необходимые для корректной работы дизайн системы.
-   `themes` - содержит пользовательские темы, разбитые на вертикали, сгенерированные на основе файлов из [репозитория](https://github.com/salute-developers/theme-converter).

### Директория `core`

Содержит библиотеки, которые являются обязательными зависимостями для работы дизайн системы.

### Директория `libraries`

Содержит пользовательские библиотеки компонентов.

### Директория `packages`

Содержит утилитарные пакеты, необходимые для корректной работы дизайн системы.

### Директория `themes`

Содержит пользовательские темы, разбитые на вертикали, сгенерированные на основе файлов из [репозитория](https://github.com/salute-developers/theme-converter).

## Разработка

Для разработки используется инструмент [Expo SDK](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/) и [storybook/react-native](https://github.com/storybookjs/react-native).

Есть несколько способов разработки библиотек компонентов для мобильных устройств:

1. Через веб-приложение
2. Через ios симулятор (требуется наличие `xcode`). Подробная инструкция по установке - https://docs.expo.dev/workflow/ios-simulator/
3. Через android симулятор (требуется наличие `android studio`). Подробная инструкция по установке - https://docs.expo.dev/workflow/android-studio-emulator/

### Запуск storybook

Необходимо перейти в нужную директорию

```bash
$ cd ./libraries/plasma_b2c
```

И выполнить команду запуска

```bash
$ npm run storybook
```

После чего в консоли появится интерактивное меню, с вариантами взаимодействия:

```bash
...
› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor

› Press ? │ show all commands
```
