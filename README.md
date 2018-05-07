# node-logger
A simple reusable class to query a MS SQL Server database.  This uses the [mssql](https://github.com/tediousjs/node-mssql) package to access SQL Server.

## Usage
```javascript
const Logger = require("node-logger");

Logger.setup({
    server: "ms.sql.server.com",
    port: 1433,
    user: "my_user_name",
    password: "my_password",
    database: "my_database",
    pool: {
        max: 50,
        min: 0,
        idleTimeoutMillis: 30000
    }
});

my_erroring_promise().catch((err) => {
    Logger.log("My Application", "My Category", err);
});
```

See the [mssql](https://github.com/tediousjs/node-mssql) package for more examples of settings.

## Version history

### 1.0.0 - 5/7/2018
* Initial release.
