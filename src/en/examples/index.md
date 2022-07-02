---
lang: ru
---

# Examples

[[toc]]
---


## Hello World
Минимальное приложение с поддержкой PSR-7 на **Next2** выглядит так:

@[code{4-} php{12-16}](../../example/hello-world.php)

## Composition application (mount)

Приложения могут монтироваться друг в друга образуя композицию приложений. Это легко достигается 12 строчками кода (см [PTS\Next\2CompositionMicroApp](https://github.com/alexpts/php-next2/blob/master/src/CompositionMicroApp.php#L13));

@[code{4-}](../../example/mount.php)

Такой прием позволяет логически отделять код. Производить специфическую настройку для каждого приложений отдельно, например добавить для приложения `apiV1` middleware, которая будет реаоизовывать обязательную авторизацию.