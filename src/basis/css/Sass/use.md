# @use

每一个 Sass 文件称作为一个模块（分为自定义模块和 Sass 内置模块），不同的模块可能会用到一些相同的变量、混合、函数，能否在一个模块中使用另一个模块中定义的变量、混合、函数呢，答案是可以的，`@use` 就是做这个事情的。

`@use` 不仅可以导入变量、混合、函数，还可以导入样式规则。所以项目中通常按不同作用将样式分散到多个 Sass 文件中。

注意，虽然通过 `@use` 导入了变量、混合、函数和样式规则，但最终生成的 CSS 文件中只包含样式规则。

> `@import` 将逐渐废弃，推荐更多使用 `@use`。

> `@use` 规则必须位于 `@forward` 之外的任何规则之前。

## 1 私有成员

模块内的变量、混合、函数默认都是对位暴露的，如果像让某个成员变成私有的，只需在成员名称前加上 `-` 或者 `_` 即可。

```scss
$-radius: 3px;

@mixin rounded {
  border-radius: $-radius;
}
```

## 2 入口模块（索引模块）

如果在文件夹中写入 index.scss 或 _index.scss，导入时的 URL 只写 index.scss 或 _index.scss 所在的目录也是可以的。

![02](/images/20230727/02.png)

```scss
// test.scss
@use "./style";
```

## 3 部分（Partials）

按照惯例，仅打算作为模块加载而不是自行编译的 Sass 文件以 `_` 开头。当导入模块时，可以省略 `_`。

如果编辑器开启了自动编译功能，正常情况下会自动编译 Sass 文件，而以 `_` 开头的 Sass 文件不会被编译。

![01](/images/20230727/01.png)

## 4 加载成员

- 访问变量 `<namespace>.<variable>`
- 访问混合 `<namespace>.<function>()`
- 访问函数 `@include <namespace>.<mixin>()`

默认情况下 namespace 为 URL 的最后组成部分，也可以在导入时对**namespace 进行重命名**。

```scss
// _corners.scss
$radius: 3px;

@mixin rounded {
  border-radius: $radius;
}
```

```scss
// _box.scss
$width: 10px;
```

```scss
// style.scss
@use "corners";
@use "box" as b;

.button {
  @include corners.rounded;
  padding: 5px + corners.$radius;
  width: b.$width;
}
```

## 5 配置

模块中的变量可以使用 `!default` 标志使其可配置，当导入该模块时，使用 `@use <url> with (<variable>: <value>, <variable>: <value>)` 对变量进行配置。

```scss
SCSS SYNTAX
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}
```

```scss
// style.scss
@use 'library' with (
  $black: #222,
  $border-radius: 0.1rem
);
```

style.scss 编译后：

```css
code {
  border-radius: 0.1rem;
  box-shadow: 0 0.5rem 1rem rgba(34, 34, 34, 0.15);
}
```




