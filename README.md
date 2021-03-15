# dart-project

School project game

A la racine du dossier `/api`, créez un fichier `ormconfig.json` contenant les informations de votre base de données postgres :
```json
{
    "type": "postgres",
    "host": "localhost",
    "port": "<PORT>",
    "username": "<USERNAME>",
    "password": "<PASSWORD>",
    "database": "<DATABASE NAME>",
    "entities": ["dist/**/*.entity.js"],
    "synchronize": true,
    "logging": true
}
```
