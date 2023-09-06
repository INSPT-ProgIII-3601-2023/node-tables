# Generador de tablas de multiplicar con NodeJS

Proyecto de ejemplo para aprender las bases de NodeJS. Genera un archivo .txt con la tabla de multiplicar del número que se provea como parámetro en la línea de comandos.

## Pasos para ejecutar
1. Abrí la terminal y tipeá el comando `npm install` para que se descarguen las dependencias
2. Tipeá el comando `node index` para ejecutar la app. Seguramente lance una excepción por no proveer un número.

## Parámetros esperados
* n: Representa el número del cuál se va a hacer la tabla ("Tabla del n")
* max: Representa hasta qué numero llega la tabla. Si no se provee, se asume 10.
* ver: Bandera que representa si se desea ver la tabla en la consola o no.
El orden de los parámetros es irrelevante.

## Ejecuciones de ejemplo
* `node index --n=6`
* `node index --n=3 --max=15`
* `node index --n=5 --ver`
* `node index --n=2 --max=8 --ver`