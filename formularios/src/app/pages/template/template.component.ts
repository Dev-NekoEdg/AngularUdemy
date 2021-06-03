import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  countryList: Country[] = [];

  usuario = {
    nombre: '', //'pluto',
    apellido: '', //'Miaunster',
    correo: '', //'plutonio@meowmeow.vom'
    pais: ''
  };

  constructor(
    private service: CountryService
  ) { }

  ngOnInit(): void {
    this.loadCountries();
    console.log(this.countryList);

  }

  submit(forma: NgForm): void {
    console.log(forma);


    if (forma.invalid) {

      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
  }

  loadCountries(): void {

    this.service.getCountries().
      subscribe((result) => {
        result.forEach((country) => this.countryList.push(country));
      });

      // Método para insertar en arreglos en la pocision 0.
      this.countryList.unshift({ name: 'Seleccione ... ', alpha3Code: ''});
  }

}
