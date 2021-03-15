# dart-project 

> School dart project game

## Note

### On `/API` directory  

> Don't forget to init a `ormconfig.json` with your database config at the root of /api.

Here is a template

`ormconfig.json`
``` json
{
    "type": "postgres",
    "host": "YOUR_DB_HOST",
    "port": "YOUR_DB_PORT",
    "username": "YOUR_DB_USER_NAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "YOUR_DB_HOST",
    "entities":  ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true,
    "logging": true
}
```