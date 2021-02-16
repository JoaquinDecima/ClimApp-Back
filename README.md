# TECO Challenge ClimApp

Este desafío se dio como parte de una oportunidad laboral en Telecom Argentina.

## Backend Test

Preferentemente desarrollar sobre Node.js, como alternativa PHP
Se requiere implementar una API que provea en formato JSON el estado del tiempo basado en
diferentes endpoints.
Se requiere realizar tests con las librerías antes mencionadas o con equival

#### Ruta base

* **/v1**

#### Endpoints

* **/location** Devuelve los datos de ubicación city según ip-api.
* **/current[/city]** City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
ip-api y el estado del tiempo actual.
* **/forecast[/city]** City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días

## Adicionales

Adicionalmente a los recursos sugeridos hacemos uso de recursos adicionales para simplificar o mejorar el servicio, a continuación detallamos estos recursos.

#### Datos.gob.ar

Uno de los conflictos que me encontré es, ¿Cómo convertir una Ciudad en coordenadas? Existen muchas formas, pero una de las menos complejas (para Argentina) es la opción de normalización de nombres de las provincias de Argentina. Además de normalizar otorga las coordenadas de dichas provincias.

https://datosgobar.github.io/georef-ar-api/etl-data/

## Servidor de Pruebas

Como método más cómodo para poder apreciar el trabajo final se decidió publicar el proyecto en servicios gratuitos que permitan mostrar el trabajo realizado como un producto final. En este caso podemos encontrar el Back en la siguiente URL

https://climappjdecima.herokuapp.com/v1/
