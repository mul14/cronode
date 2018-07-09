# Node Cron Expressive

> Status: In development

## Usage

```js
Cron.job(() => {

  console.log((new Date().toLocaleTimeString())

}).everyMinutes().run()
```

## API

| Method                 | Description      |
|------------------------|------------------|
| run()                  | Run the task     |
| yearly()               |                  |
| annually()             |                  |
| monthly()              |                  |
| weekly()               |                  |
| daily()                |                  |
| hourly()               |                  |
| everyMinutes()         |                  |
| everyFiveMinutes()     |                  |
| everyTenMinutes()      |                  |
| everyFifteenMinutes()  |                  |
| everyThirtyMinutes()   |                  |
