import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


interface ErrorValidate{
  [s: string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }


  
    // {[s: string]: boolean } // noPruebas(control: FormControl): { [s: string]: boolean } | null {
  // indica que retornara un objeto anaonimo con cualquier string de nombre y con un valor boolean.
  noPruebas(control: FormControl):  ErrorValidate| null {

    if (control.value?.toLowerCase() === 'pruebas') {
      return { noPruebas: true }

    }

    return null;
  }


  passwordIguales(passOne: string, passTwo: string) {
    
    return (fromGroup: FormGroup) => {
      const controlPassOne = fromGroup.controls[passOne];
      const controlPassTwo = fromGroup.controls[passTwo];

      if(controlPassOne.value === controlPassTwo.value){
        controlPassTwo.setErrors(null);
      } else{
        controlPassTwo.setErrors({ passwordNoCoinciden: true });
      }

    };
  }

  userExist(control: FormControl): Promise<ErrorValidate | null> | Observable<ErrorValidate | null>{
    if(!control.value){
      return Promise.resolve(null);
    }

    return new Promise( (resolve, reject) => {
      
      setTimeout(()=>{
        if(control.value === 'pruebaslocas' ){
          resolve({ existe: true });
        } else{
          resolve(null);
        }
      }, 3500);

    } );
  }
}
