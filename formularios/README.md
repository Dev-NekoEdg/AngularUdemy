# Formularios

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## no generar el archivo de pruebas

ng g c pages/template --skipTests

## FormModule

Con el FormModule de angular el Angular Cli toma control de las etiquetas <form> y evita que se "haga" el post en los
botones de submit.

## notas de formulario por Template

* cuando un input tiene la propiedad de ngModel se agregan las clases de ng-valid(indica si es valido), ng-touched/untouched  y ng-prestine/dirty(indica si el usuario modifico el control en el textchanged) 

* expresión regular para email desde Html pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"

*  unshift(): Método para insertar en arreglos en la pocision 0.