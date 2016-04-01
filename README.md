# Point

JavaScript 2D point library with methods for common vector operations

Forked from [Victor](https://github.com/maxkueng/victor/), bringing in ideas and code from [Paper.js](https://github.com/paperjs/paper.js/blob/develop/src/basic/Point.js).

## Installation

### Node.js / Browserify

```bash
npm install @studiomoniker/point --save
```

```javascript
var Point = require('@studiomoniker/point');
var vec = new Point(10, 20);
```

### ES6

```bash
npm install @studiomoniker/point --save
```

```javascript
import Point from '@studiomoniker/point';
let vec = new Point(10, 20);
```

### Global object

Include the pre-built script.

```html
<script src="build/point.js"></script>
<script>
var vec = new Point(10, 20);
</script>
```

## Build & test

```bash
npm run build
```

```bash
npm test
```

## License

MIT
