# postcss-day

PostCSS plugin to acknowledge that another CSS Day went by, how many days until the next edition and to give you a bitterbal.

## Installation

```sh
npm install postcss-day
```

## Quick Start

Example 1:

```js
import fs from "fs";
import postcss from "postcss";
import cssday from "postcss-day";

const css = fs.readFileSync("input.css", "utf8");

const output = postcss().use(cssday()).process(css).css;

console.log("\n====>Output CSS:\n", output);
```

Or just:

```js
const output = postcss(cssday()).process(css).css;
```

input.css:

```css
body {
  color: rebeccapurple;
}
```

You will get:

```css
body {
  color: rebeccapurple;
}
```

This plugin doesn't do anything to your CSS! Just check your CLI output.

---

## PS

Please remind me to update the dates when needed.
