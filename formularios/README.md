# Formularios

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## no generar el archivo de pruebas

ng g c pages/template --skipTests

## FormModule

Con el FormModule de angular el Angular Cli toma control de las etiquetas <form> y evita que se "haga" el post en los
botones de submit.

## notas de formulario por Template

* cuando un input tiene la propiedad de ngModel se agregan las clases de ng-valid(indica si es valido), ng-touched/untouched  y ng-prestine/dirty(indica si el input tiene un valor inicial y que no ha sido modificado) 

* expresión regular para email desde Html pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"

*  unshift(): Método para insertar en arreglos en la pocision 0.

## Froms reactives

* FormsModule es para trabajart con formularios con template y para trabajar con formularios reactivos es ReactiveFormsModule. Ambos están en @angular/forms
* Con los reactivo no se travaja en NgModel se coloca la propiedad de formControlName y se le iguala a las propiedades del objeto FormGroup del TS.
* FormGroup.setValue() es obligatorio colocar un objeto con cada propiedad del formulario y colocarle su respectivo valor
* FormGroup.reset() no necesita colocar todas las propiedades del formulario. Es buenos para setear y colocar algunos valores por defecto.
