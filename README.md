# Cronode

> Status: In development

Cron for Node.js with expressive code.

## Installation

Use [npm](https://docs.npmjs.com/cli/install) or [yarn](https://yarnpkg.com) to install `cronode`.

```
npm install cronode
# or
yarn add cronode
```

## Usage

```js
const Cron = require('cronode')

Cron.job(() => {

  // Tasks
  console.log((new Date().toLocaleTimeString())

}).everyMinutes().start()
```

## API

| Method                 | Description      |
|------------------------|------------------|
| `run()`                | Run the task     |
| `yearly()`             |                  |
| `annually()`           |                  |
| `monthly()`            |                  |
| `weekly()`             |                  |
| `daily()`              |                  |
| `hourly()`             |                  |
| `everyMinutes()`       |                  |
| `everyFiveMinutes()`   |                  |
| `everyTenMinutes()`    |                  |
| `everyFifteenMinutes()`|                  |
| `everyThirtyMinutes()` |                  |
