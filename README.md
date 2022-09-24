# Melp startup API-Rest

API-Rest de restaurantes con NodeJs.

### 🚧 Configuración
Luego de clonar el proyecto, necesitara:
- Instalar las dependencias del proyecto (ya sea directamente en su maquina o en un entorno)
    ```
    npm install
    ```
- Cree una base de datos en su servicio de Postgresql.
- Importe el archivo `restaurantes.csv` en una colección llamada **restaurantes**.
- Duplique el archivo `.env.example` y renombre la copia a `.env`
    - Ingrese los datos y credenciales solicitadas.
        ```
        # Entorno en el que correra el proyecto
        APP_ENV=local
        # Host o IP en el que desea levantar el servidor
        APP_HOST=localhost
        # Puerto en el que desea levantar el servidor
        APP_PORT=8000

        # URI de su conexión a Postgresql 
        DB_HOST=127.0.0.1
        # Puerto en el que esta corriendo su instancia de Postgresql
        DB_PORT=5432
        # Nombre de la base de datos
        DB_NAME=example
        ```


### 🌐 Ejecutar
Deberas colocarte en el directorio `src` y ejecutar en una bash
```
nodemon index.js
```

Una vez que el servidor este levantado, usted puede usar el endpoint `/docs` para testear con Postman.

### 🧰 Dependencias || plugins
| Name | Version |
| ---- | ---- |
| node | 16.17.0 |
|body-parser | ^1.20.0 |
|cors | ^2.8.5 |
|express | ^4.18.1 |
|helmet | ^6.0.0 |
|morgan | ^1.10. |