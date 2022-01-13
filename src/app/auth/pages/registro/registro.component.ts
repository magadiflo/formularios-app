import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

interface CampoError {
  validador: string,
  mensaje: string,
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    'password-confirm': ['', [Validators.required]],
  }, {
    validators: [this.vs.camposIguales('password', 'password-confirm')],
  });

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    const key = Object.keys(errors!)[0];

    const mensajesError: CampoError[] = [
      { validador: 'required', mensaje: 'El email es requerido.' },
      { validador: 'pattern', mensaje: 'Formato de email no válido.' },
      { validador: 'emailTomado', mensaje: 'El email ya fue tomado.' },
    ];

    const mensajeError = mensajesError.find((obj: CampoError) => obj.validador == key);
    return mensajeError?.mensaje || '';
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Tinkler Adan',
      email: 'test1@test.com',
      username: 'magadiflo',
      password: '123456',
      'password-confirm': '123456',
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(): void {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}

