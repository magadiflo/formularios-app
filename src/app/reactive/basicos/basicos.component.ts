import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)],],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) { }

  //setValue({...}), necesariamente se tienen que enviar todos los campos del objeto miFormulario, sino sale error
  //reset({...}), únicamnete le mandamos los campos que deseamos establecer valor al formulario
  ngOnInit(): void {
      this.miFormulario.reset({
        nombre: 'Valor por defecto',
        precio: 1500,
        // existencias: 160
      });
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(): void {
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
