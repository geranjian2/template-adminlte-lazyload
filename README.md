




# distribucion de rutas 

cuando inicia el proyecto en este ejemplo seria localhost:4200 

la distriucion de las rutas seria de esta manera 


rutas sin proteccion

- localhost:4200/login para hacer el logueo del admin.

- localhost:4200/registro para hacer el registro de los usuarios.

rutas con proteccion

- localhost:4200/ciudades/save  guardar la ciudades.

- localhost:4200/ciudades muestra el listado de ciudades.

- localhost:4200/sedes muestra el listado de sedes.

- localhost:4200/sedes/save  guarda sedes.


cuando el admin este logueado

- localhost:4200 hace la busqueda por cuidad por sede y muestra la sede correspondiente a ese usuario. 



### Loguear

el usuario y clave son 

usuario : beto
clave : 123456


si no tiene usuario existente con este string puede asignar un clave en la base de datos 

- $2a$10$wkhCXhW9HXVZSAWb5xXI7u7T6si2NNitx.z.Q9f5f5IoW.NIQDCZe  ( la cual seria "123456" )

   




# Crm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
