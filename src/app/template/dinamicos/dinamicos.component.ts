import { Component } from '@angular/core';

interface Persona {
  nombre: string,
  favoritos: Favorito[],
}

interface Favorito {
  id: number,
  nombre: string,
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Martín',
    favoritos: [
      { id: 1, nombre: 'Fútbol' },
      { id: 2, nombre: 'Ciclismo' },
    ]
  }

  guardar() {
    console.log('Formulario posteado...');
  }

}
