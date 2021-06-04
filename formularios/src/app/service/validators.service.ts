import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }


  // {[s: string]: boolean }
  // indica que retornara un objeto anaonimo con cualquier string de nombre y con un valor boolean.
  noPruebas(control: FormControl): { [s: string]: boolean } | null {

    if(control.value?.toLowerCase() === 'pruebas'){
      return { noPruebas: true }

    }

    return null;
  }
}
