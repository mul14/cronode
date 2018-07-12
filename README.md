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

| Method                 | Example          | Description                      |
|------------------------|------------------|----------------------------------|
| `start()`              |                  | Run the task.                    |
| `yearly()`             |                  | Run the task every year.         |
| `monthly()`            |                  |                                  |
| `weekly()`             |                  |                                  |
| `days()`               | `days(0, 3, 5)`  | Run task every Sundays, Wednesdays, and Fridays |
| `dailyAt(time)`        | `dailyAt('14:20')`| Run task daily at specific time.|
| `daily()`              |                  |                                  |
| `hourly()`             |                  |                                  |
| `everyMinutes()`       |                  |                                  |
| `everyFiveMinutes()`   |                  |                                  |
| `everyTenMinutes()`    |                  |                                  |
| `everyFifteenMinutes()`|                  |                                  |
| `everyThirtyMinutes()` |                  |                                  |
| `sundays()`            |                  |                                  |
| `mondays()`            |                  |                                  |
| `tuesdays()`           |                  |                                  |
| `wednesdays()`         |                  |                                  |
| `thursdays()`          |                  |                                  |
| `fridays()`            |                  |                                  |
| `saturdays()`          |                  |                                  |

## License

Software licensed under the [MIT license](https://opensource.org/licenses/MIT).
