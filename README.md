# API Sencilla para consultar la tasa de cambio USD en Venezuela

__URL__ localhost:port/fuentes/[fuente | todo]

* La pagina de inicio "/" esta configurada para mostrar una tabla con información actualizada de distintas plataformas.
* Las consultas de fuentes individules solo devuelven la ultima actualización del precio de la divisa.
* Autenticacion basica requerida para poder acceder a los datos.
* Las configuraciones de logo (empresa), conexiones, etc. se hacen mediante el archivo config.json
* Al poner la app en produccion, para realizar consultas externas y no en el servidor local de desarrollo, entrar en src/public/js/main-app.js y en la linea 5 cambiar el valor de la variable a false para que tome la URL de acceso externo en la UI.