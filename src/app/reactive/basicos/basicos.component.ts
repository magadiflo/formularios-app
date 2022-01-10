import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  /**Para un nuevo campo declaramos en new FormControl..
  **/
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Procesador Intel'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // });

  /**
   * Para evitar estar declarando por cada nuevo campo
   * un new FormControl, es que usamos mejor el FormBuilder
   */
  miFormulario: FormGroup = this.fb.group({
    nombre: ['Procesador Intel'],
    precio: [0],
    existencias: [0],
  });

  constructor(private fb: FormBuilder) { }

}
