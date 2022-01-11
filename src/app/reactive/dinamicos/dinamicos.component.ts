import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Fútbol', Validators.required], 
      ['Ciclismo', Validators.required],
    ], Validators.required),
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
  }

  public get favoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

  campoNoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(): void {
    if(this.nuevoFavorito.invalid) return;
    //Ambas líneas de abajo son iguales (46 y 47)
    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

}
