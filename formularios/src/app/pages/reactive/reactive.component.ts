import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../service/validators.service';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  // el constructor se ejecuta antes de coonstruir el Html.
  constructor(
    private formBuilder: FormBuilder,
    private service: ValidatorsService
  ) {
    this.forma = this.inicializarFormulario();
    this.loadForm();
    this.createListeners();
  }

  // el ngOnInit se ejecuta después de coonstruir el Html.
  ngOnInit(): void {
  }

  get validatorName() {
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }

  get validatorLastName() {
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched;
  }

  get validatorEmail() {
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched;
  }

  get validatorUsuario() {
    return this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched;

  }

  get validatorDistrict() {
    return this.forma.get('direccion.distrito')?.invalid && this.forma.get('direccion.distrito')?.touched;
  }

  get validatorCity() {
    return this.forma.get('direccion.ciudad')?.invalid && this.forma.get('direccion.ciudad')?.touched;
  }

  get arrayHobbies() {
    return this.forma.get('hobbies') as FormArray;
  }

  get validatorPassOne() {
    return this.forma.get('passOne')?.invalid && this.forma.get('passOne')?.touched;
  }

  get validatorPassTwo() {
    const passBase = this.forma.get('passOne')?.value;
    const passValid = this.forma.get('passTwo')?.value;

    return (passBase === passValid) ? false : true;
  }


  inicializarFormulario(): FormGroup {

    let direccion: FormGroup = this.formBuilder.group({
      distrito: ['', Validators.required],
      ciudad: ['', Validators.required]
    });

    // validaciones asincronas son el 3er argumento de los controles.
    return this.formBuilder.group({
      // 0. valor por defecto; 1. validaciones
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, this.service.noPruebas]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      usuario: ['', , this.service.userExist],
      direccion: direccion,
      passOne: ['', Validators.required],
      passTwo: ['', Validators.required],
      // Arreglo de objetos en formularios.
      hobbies: this.formBuilder.array([])
    }, {
      validators: this.service.passwordIguales('passOne', 'passTwo')
    }
    );

  }

  loadForm() {
    // setValue: se debe settear todas las propiedades del formulario.
    // this.forma.setValue({
    this.forma.reset({
      nombre: "lolito",
      apellido: "lol",
      correo: "prueba@pruebas.com",
      passOne: "123456",
      passTwo: "123456",
      direccion: {
        distrito: "calle 65 no 123",
        ciudad: "bogota"
      }
    });
  }

  agregarHobbie() {
    this.arrayHobbies.push(this.formBuilder.control('', Validators.required));
  }

  borrarHobbie(index: number) {
    this.arrayHobbies.removeAt(index);
  }

  save(): void {
    console.log(this.forma);

    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach(control => {

        // Compara si el control es un formGroup. Dado que si no es un control anidado es un formcontrol.
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(innerControl => innerControl.markAsTouched());
        } else {
          control.markAsTouched();
        }

      });

      return;
    }

    // Guardar formulario.

    // cada uno de los valores se resetea.
    this.forma.reset();

    // también se le puede mandar valores por defecto al reset.-
    //this.forma.reset({ correo: 'pruebas@pruebas.com' });

  }

  createListeners() {
    // this.forma.valueChanges.subscribe((valor)=>{
    //   console.log(valor);
    // });

    //this.forma.statusChanges.subscribe(status => console.log(status));

    this.forma.get('nombre')?.valueChanges.subscribe(value => console.log(value));

    }

}
