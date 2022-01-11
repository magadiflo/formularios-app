import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    'terminos-condiciones': [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: false,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({...this.persona, 'terminos-condiciones': false});
    this.miFormulario.valueChanges.subscribe(({'terminos-condiciones': terminosCondiciones, ...rest}) => {
      this.persona = rest; 
    });
  }  

  guardar(): void {
    const formValue = {...this.miFormulario.value};
    delete formValue['terminos-condiciones'];
    this.persona = formValue;
  }

}
