# Contributing

Процесс внесения изменений в пакет `plasma-tokens`.

Ознакомтесь с общими правилами для всего репозитория: [Contributing](../../CONTRIBUTING.md)


Дизайн-токены [синхронизированы](#Синхронизация) с [figma](https://www.figma.com).


## Синхронизация

Все дизайн-токены взять из фигмы с помощью утилиты [Diez](https://diez.org/).


Для того чтобы обновить константы, выполните следующие команды
в корне пакета.

```sh
npm ci
npm run figma
```

После этого нужно изучить изменившиеся файлы внутри папки `design-language`.
Особенно внимательно нужно посмотреть на файл `design-language/src/designs/PlasmaStyles.figma.ts`

В нём хранятся вне токены стянутые из фигмы.

После того как вы убедились что ничего лишнего не удалено и все изменения были сделали осознано можно приступать к следующему шагу:

```sh
npm run build:tokens
```

На этом этапе запускается скрипт `./generate.ts` который перекладывает токены из фигмы в необходимые форматы и создаёт необходимую структуру пакета.

Если что-то не собирается можно откатить часть изменений из `design-language`. И пойти разбираться что не так: https://github.com/sberdevices/plasma/issues/new