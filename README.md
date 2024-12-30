# @kortin/unocss-preset

Useful preset for [UnoCSS](https://github.com/unocss/unocss) to avoid non-essential classes.

## Installation

```shell
npm i @kortin/unocss-preset --save-dev
```

## Usage

To use this preset, simply include it in your UnoCSS configuration. This preset helps you to avoid writing repetitive and non-essential classes by providing utility classes for common layout patterns.

For Example:
```html
<div class="flex justify-center items-center"></div>
<!-- shortcut to be -->
<div class="flex-center"></div>
```

### Rules & Shortcuts Details

This preset provides the following utility classes:

#### Center

| Class Name | Properties |
|------------|------------|
| `flex-center` | `display: flex`<br>`align-items: center`<br>`justify-content: center` |
| `flex-col-center` | `display: flex`<br>`flex-direction: column`<br>`align-items: center`<br>`justify-content: center` |
| `absolute-center` | `position: absolute`<br>`top: 50%`<br>`left: 50%`<br>`transform: translate(-50%, -50%)` |
| `fixed-center` | `position: fixed`<br>`top: 50%`<br>`left: 50%`<br>`transform: translate(-50%, -50%)`<br>`z-index: 99` |
| `grid-center` | `display: grid`<br>`place-items: center` |
| `inline-center` | `display: inline-flex`<br>`align-items: center`<br>`justify-content: center` |


#### Flex

| Class Name | Properties |
|------------|------------|
| `flex-row` | `display: flex`<br>`flex-direction: row` |
| `flex-col` | `display: flex`<br>`flex-direction: column` |
| `flex-reverse` | `display: flex`<br>`flex-direction: row-reverse` |
| `flex-col-reverse` | `display: flex`<br>`flex-direction: column-reverse` |
| `flex-between` | `display: flex`<br>`justify-content: space-between`<br>`align-items: center` |
| `flex-around` | `display: flex`<br>`justify-content: space-around`<br>`align-items: center` |
| `flex-evenly` | `display: flex`<br>`justify-content: space-evenly`<br>`align-items: center` |
| `flex-start` | `display: flex`<br>`justify-content: flex-start`<br>`align-items: center` |
| `flex-end` | `display: flex`<br>`justify-content: flex-end`<br>`align-items: center` |
| `flex-wrap` | `display: flex`<br>`flex-wrap: wrap` |
| `flex-nowrap` | `display: flex`<br>`flex-wrap: nowrap` |

#### Grid

| Class Name | Properties |
|------------|------------|
| `grid-rows-{n}` | `display: grid`<br>`grid-template-rows: repeat(n, minmax(0, 1fr))` |
| `grid-cols-{n}` | `display: grid`<br>`grid-template-columns: repeat(n, minmax(0, 1fr))` |

#### Border

| Class Name | Properties |
|------------|------------|
| `b-{size}` | `border-width: {size}`<br>`border-style: solid` |
| `b-{x/y}-{size}` | Applies border to x (left/right) or y (top/bottom) with specified size |
| `b-{r/l/t/b/s/e}-{size}` | Applies border to specific direction (right/left/top/bottom/start/end) |

Note: For border utilities, if size is not specified, it defaults to 1px. Size can be specified with or without units.


## License

MIT License &copy; 2024-PRESENT [kortin.zhou](https://github.com/kortin99)
