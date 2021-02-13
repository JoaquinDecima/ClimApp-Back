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
