# TECO Challenge ClimApp

Este desafío se dio como parte de una oportunidad laboral en Telecom Argentina.

---

## Run App

Primero debemos clonar proyecto y proceder a instalar las dependencias de la siguiente manera:

```shell
git clone https://github.com/JoaquinDecima/ClimApp-Back.git
cd ClimApp-Back
npm i
```

Luego debemos completar los datos del archivo `.env` en el repositorio se encuentra el `.env.example` para tomarlo como plantilla

```dotenv
OW_KEY=8564d152e5793d5a7fe47abde047276c
PORT=8080
```
Luego podemos iniciar el proyecto de la siguiente manera

```shell
npm start
```

---

## Backend Test

Preferentemente desarrollar sobre `Node.js`, como alternativa `PHP`
Se requiere implementar una API que provea en formato `JSON` el estado del tiempo basado en
diferentes endpoints.
Se requiere realizar tests con las librerías antes mencionadas o con equival

### Ruta base

* `/api`

### Endpoints

* `/location` Devuelve los datos de ubicación city según ip-api.
* `/current[/city]` City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
ip-api y el estado del tiempo actual.
* `/forecast[/city]` City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días

---

## Adicionales

Adicionalmente a los recursos sugeridos hacemos uso de recursos adicionales para simplificar o mejorar el servicio, a continuación detallamos estos recursos.

#### Datos.gob.ar

Uno de los conflictos que me encontré es, ¿Cómo convertir una Ciudad en coordenadas? Existen muchas formas, pero una de las menos complejas (para Argentina) es la opción de normalización de nombres de las provincias de Argentina. Además de normalizar otorga las coordenadas de dichas provincias.

https://datosgobar.github.io/georef-ar-api/etl-data/

---